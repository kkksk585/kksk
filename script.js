// 获取DOM元素
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// 游戏配置
const gridSize = 20;
const tileCount = canvas.width / gridSize;

// 游戏状态
let snake = [];
let food = {};
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let direction = 'right';
let nextDirection = 'right';
let gameSpeed = 150;
let gameInterval;
let isGameRunning = false;
let isGameOver = false;

// 更新最高分显示
highScoreElement.textContent = highScore;

// 初始化游戏
function initGame() {
    // 重置蛇的位置和长度
    snake = [
        { x: 5, y: 10 },
        { x: 4, y: 10 },
        { x: 3, y: 10 }
    ];
    
    // 重置方向
    direction = 'right';
    nextDirection = 'right';
    
    // 生成食物
    generateFood();
    
    // 重置分数
    score = 0;
    scoreElement.textContent = score;
    
    // 重置游戏状态
    isGameOver = false;
    
    // 绘制初始游戏画面
    draw();
}

// 生成食物
function generateFood() {
    let newFood;
    let onSnake;
    
    do {
        onSnake = false;
        newFood = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        
        // 检查食物是否生成在蛇身上
        for (let segment of snake) {
            if (segment.x === newFood.x && segment.y === newFood.y) {
                onSnake = true;
                break;
            }
        }
    } while (onSnake);
    
    food = newFood;
}

// 绘制游戏画面
function draw() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格线（可选）
    drawGrid();
    
    // 绘制蛇
    drawSnake();
    
    // 绘制食物
    drawFood();
    
    // 如果游戏结束，显示游戏结束信息
    if (isGameOver) {
        drawGameOver();
    }
}

// 绘制网格线
function drawGrid() {
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    
    // 绘制垂直线
    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// 绘制蛇
function drawSnake() {
    snake.forEach((segment, index) => {
        // 设置蛇头颜色
        if (index === 0) {
            ctx.fillStyle = '#4CAF50';
        } else {
            // 蛇身体颜色渐变
            const greenValue = 150 + index * 5;
            ctx.fillStyle = `rgb(50, ${Math.min(greenValue, 200)}, 50)`;
        }
        
        // 绘制蛇的身体部分
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        
        // 添加边框
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        
        // 如果是蛇头，绘制眼睛
        if (index === 0) {
            drawEyes(segment);
        }
    });
}

// 绘制蛇的眼睛
function drawEyes(head) {
    ctx.fillStyle = 'white';
    const eyeSize = gridSize / 5;
    const eyeOffset = gridSize / 3;
    
    // 根据蛇的方向调整眼睛位置
    switch (direction) {
        case 'right':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + gridSize - eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'left':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + gridSize - eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'up':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'down':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + gridSize - eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + gridSize - eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            break;
    }
    
    // 绘制黑色瞳孔
    ctx.fillStyle = 'black';
    const pupilSize = eyeSize / 2;
    
    switch (direction) {
        case 'right':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + gridSize - eyeOffset + 1, head.y * gridSize + eyeOffset, pupilSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset + 1, head.y * gridSize + gridSize - eyeOffset, pupilSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'left':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset - 1, head.y * gridSize + eyeOffset, pupilSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + eyeOffset - 1, head.y * gridSize + gridSize - eyeOffset, pupilSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'up':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + eyeOffset - 1, pupilSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + eyeOffset - 1, pupilSize, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'down':
            ctx.beginPath();
            ctx.arc(head.x * gridSize + eyeOffset, head.y * gridSize + gridSize - eyeOffset + 1, pupilSize, 0, Math.PI * 2);
            ctx.arc(head.x * gridSize + gridSize - eyeOffset, head.y * gridSize + gridSize - eyeOffset + 1, pupilSize, 0, Math.PI * 2);
            ctx.fill();
            break;
    }
}

// 绘制食物
function drawFood() {
    ctx.fillStyle = '#f44336';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    
    // 添加食物的细节
    ctx.fillStyle = '#b71c1c';
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 4, 0, Math.PI * 2);
    ctx.fill();
}

// 绘制游戏结束信息
function drawGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('游戏结束', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '18px Arial';
    ctx.fillText(`最终得分: ${score}`, canvas.width / 2, canvas.height / 2);
    ctx.fillText('按开始按钮重新开始', canvas.width / 2, canvas.height / 2 + 30);
}

// 更新游戏状态
function update() {
    if (!isGameRunning || isGameOver) return;
    
    // 更新方向
    direction = nextDirection;
    
    // 获取蛇头位置
    const head = {
        x: snake[0].x,
        y: snake[0].y
    };
    
    // 根据方向移动蛇头
    switch (direction) {
        case 'right':
            head.x++;
            break;
        case 'left':
            head.x--;
            break;
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
    }
    
    // 检查是否撞到边界
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }
    
    // 检查是否撞到自己
    for (let segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
            gameOver();
            return;
        }
    }
    
    // 将新的蛇头添加到数组开头
    snake.unshift(head);
    
    // 检查是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        // 增加分数
        score += 10;
        scoreElement.textContent = score;
        
        // 更新最高分
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('snakeHighScore', highScore);
        }
        
        // 生成新的食物
        generateFood();
        
        // 随着分数增加，提高游戏速度
        if (score % 50 === 0 && gameSpeed > 50) {
            gameSpeed -= 10;
            clearInterval(gameInterval);
            gameInterval = setInterval(gameLoop, gameSpeed);
        }
    } else {
        // 如果没吃到食物，移除尾部
        snake.pop();
    }
    
    // 绘制更新后的游戏画面
    draw();
}

// 游戏循环
function gameLoop() {
    update();
}

// 游戏结束处理
function gameOver() {
    isGameRunning = false;
    isGameOver = true;
    clearInterval(gameInterval);
    draw();
}

// 开始游戏
function startGame() {
    if (isGameRunning) return;
    
    if (isGameOver) {
        initGame();
    }
    
    isGameRunning = true;
    gameInterval = setInterval(gameLoop, gameSpeed);
}

// 暂停游戏
function pauseGame() {
    if (!isGameRunning || isGameOver) return;
    
    isGameRunning = false;
    clearInterval(gameInterval);
    
    // 显示暂停信息
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('游戏暂停', canvas.width / 2, canvas.height / 2 - 15);
    ctx.font = '18px Arial';
    ctx.fillText('按空格键继续', canvas.width / 2, canvas.height / 2 + 15);
}

// 重置游戏
function resetGame() {
    isGameRunning = false;
    clearInterval(gameInterval);
    initGame();
}

// 处理键盘输入
function handleKeyPress(e) {
    // 获取当前按键
    const key = e.key;
    
    // 处理方向键
    if ((key === 'ArrowRight' && direction !== 'left') || 
        (key === 'ArrowLeft' && direction !== 'right') || 
        (key === 'ArrowUp' && direction !== 'down') || 
        (key === 'ArrowDown' && direction !== 'up')) {
        // 阻止页面滚动
        e.preventDefault();
        
        // 更新下一个方向
        switch (key) {
            case 'ArrowRight':
                nextDirection = 'right';
                break;
            case 'ArrowLeft':
                nextDirection = 'left';
                break;
            case 'ArrowUp':
                nextDirection = 'up';
                break;
            case 'ArrowDown':
                nextDirection = 'down';
                break;
        }
    } else if (key === ' ' || key === 'Spacebar') {
        // 空格键暂停/继续
        e.preventDefault();
        if (isGameRunning) {
            pauseGame();
        } else if (!isGameOver) {
            startGame();
        }
    } else if (key === 'Enter' && isGameOver) {
        // 回车键重新开始游戏
        e.preventDefault();
        startGame();
    }
}

// 事件监听
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
resetBtn.addEventListener('click', resetGame);
document.addEventListener('keydown', handleKeyPress);

// 初始化游戏
initGame();
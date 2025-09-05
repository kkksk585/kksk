Trae 作为一款强大的 AI 编程助手，不仅内置了一系列业界顶尖的 AI 模型供用户直接切换使用，还提供了灵活的自定义模型接入功能，满足用户的个性化需求。

### Trae 内置模型一览

为了满足不同地区用户的需求，Trae 在其国际版和国内版中预置了不同的模型，汇总如下：

| Trae IDE | 模型类别 | 模型名称 |
| --- | --- | --- |
| 国外版 | 超级模型 | Claude-3.5-Sonnet |
| Claude-3.7-Sonnet |
| Claude-4-Sonnet (New Beta) |
| Gemini-2.5-Pro-Preview(0506) (New) |
| GPT-4.1 |
| GPT-4o |
| DeepSeek-V3-0324 |
| DeepSeek-Reasoner(R1) |
| 高级模型 | Gemini-2.5-Flash-Preview(0520) |
| 国内版 | 内置模型 | Doubao-Seed-1.6 (New) |
| Doubao-1.5-pro |
| Doubao-1.5-thinking-pro |
| DeepSeek-V3-0324 |
| DeepSeek-Reasoner (R1) |

### 为什么需要自定义 AI 模型？

Trae 提供了丰富的内置模型，大多数场景已经满足需求了。但在某些场景下，你可能依然需要接入自定义模型：

*   **成本与效率考量**：对于未使用 Trae Pro 会员的用户，在高峰时段可能会遇到排队等待的情况。通过接入自己的第三方模型 API，可以有效绕开排队，并且通常能以更低的成本使用强大的模型能力。
*   **模型选择的自由度**：如果你希望使用的模型恰好不在 Trae 的预置列表中（例如 Anthropic 强大的 Claude 4 Opus），或者想在第一时间尝鲜某个刚刚发布的最新模型，自定义接入功能就显得至关重要。
*   **扩展国内版模型库**：相比国际版，Trae 国内版支持的模型相对有限。如果你拥有其他国内优秀模型（如 Kimi、文心一言等）的 API，可以通过自定义接入的方式，极大地丰富你的模型选择。

### 如何添加自定义模型

Trae 的模型添加界面设计得非常友好，整个过程清晰直观。

基本步骤如下：

1.  在 AI 对话框右上角，点击 **设置** 图标 > **模型**。
2.  在弹出的 **模型** 窗口中，点击 **\+ 添加模型** 按钮。
3.  在 **添加模型** 窗口中，配置相应信息。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e47bb8ad08834d53bd98d5940f02815d~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=891&h=642&s=63612&e=png&b=191b1f)

点击添加模型后，在模型服务提供商这里可以看到 Trae 内置了很多模型服务提供商便于选择。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aaf6d7e1c4fc4037999c9db3b2ec7cf8~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=746&h=573&s=37785&e=png&b=2e3037)

下面我们通过两个实例，分别演示如何添加国外和国内的模型服务商。

#### 示例一：添加国外模型服务商 (Anthropic)

以添加编程界备受推崇的 Anthropic 公司模型为例。

1.  **选择服务商**：在服务商下拉列表中，我们选择 `Anthropic`。
    
2.  **选择模型**：Trae 会自动列出该服务商旗下常见的模型。你可以直接选择，比如 `Claude 3 Opus`。当然，如果你想使用的模型不在列表中，也可以选择 `使用其他模型`，然后手动填写模型 ID。
    
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c999cf275be245ef9aac1f7154e05926~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=754&h=735&s=61876&e=png&b=2d2f35)
    
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e73f9b2071e474f8c94ece5884118f6~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=743&h=571&s=40858&e=png&b=2f3138)
    
3.  **获取并填写 API 密钥**：这是最关键的一步。Trae 非常贴心地提供了 **获取 API 密钥** 的快捷链接，点击后会直接跳转到 Anthropic 官方的 API Key 管理页面。你只需登录后创建新的密钥，然后将其复制并粘贴到 Trae 的输入框中即可。
    
    > **注意**：API 密钥通常只在创建时完整显示一次，请务必在关闭页面前复制并妥善保管。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ff15917c74f49c0967c144a6a852725~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1144&h=861&s=79522&e=png&b=0f0f0e)
    
4.  **添加模型**：点击 **添加模型** 按钮，Trae 会验证密钥的有效性。如果一切顺利，你的自定义模型就添加成功了！
    

#### 示例二：添加国内模型服务商 (硅基流动)

之前写了篇介绍 "硅基流动" 接入 DeepSeek 模型的文章，被送了很多额度，这里也正好可以使用下。下面我们以接入硅基流动的 DeepSeek 模型为例。

1.  **获取 API Key**： 首先，访问 [硅基流动云平台](https://cloud.siliconflow.cn/account/ak "https://cloud.siliconflow.cn/account/ak") 并登录。在 API 密钥管理页面创建一个新的 API Key。硅基流动的 API Key 创建好之后还可以在列表点击复制按钮获取。
    
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f54af65b4c1e449781b8555596aa30f5~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=920&h=234&s=47548&e=png&b=fbf7f6)
    
2.  **在 Trae 中添加模型**：
    
    *   **服务商**：选择 `硅基流动`。
    *   **模型**：硅基流动支持多种模型，你可以根据需要填写模型 ID，例如 `deepseek-ai/DeepSeek-V3` 或推理能力更强的 `deepseek-ai/DeepSeek-R1`。
    *   **API 密钥**：将上一步从硅基流动平台获取的 API Key 粘贴于此。  
        ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/917226f1d2494018ac813610b00271b7~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=732&h=564&s=38583&e=png&b=303239)
3.  **完成添加**： 点击 **添加模型** 按钮。验证通过后，你就可以在 Trae 中使用通过硅基流动接入的 DeepSeek 模型了。
    

### 管理你的自定义模型

添加模型后，你可以在 **模型** 设置窗口中方便地对它们进行管理。列表中会清晰地展示你添加的所有自定义模型。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5939753567554762b70f4644435407a5~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=838&h=586&s=58480&e=png&b=191b1f)

在模型列表的右侧，提供了一系列操作按钮：

*   **启用/禁用开关**：这是一个非常方便的功能。通过模型最右侧的开关，你可以临时禁用某个模型。禁用后，该模型将不会出现在 AI 聊天窗口的模型选择列表中，但其配置信息会被保留。当你需要时，可以随时重新启用，无需重新配置。
    
*   **编辑模型**：点击编辑图标，可以修改模型的配置。需要注意的是，对于已经添加的模型，你只能更新它的 **API 密钥**。服务商和模型名称是不可修改的。
    
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25e2252f6ec1476fa9800f1e4c79c8f6~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=744&h=568&s=39664&e=png&b=303239)
    
*   **删除模型**：如果一个模型配置你不再需要，可以点击删除图标将其永久移除。
    

### 如何使用自定义模型

当你成功添加并启用了自定义模型后，就可以在 Trae 的 AI 对话中直接使用它了。切换和使用方式与内置模型无异，但体验上有一个巨大的优势。

1.  **切换模型**：在 AI 对话输入框的右下角，点击当前模型名称，在"自定义"分类下选择你想要使用的模型，例如 `DeepSeek-V3`。你会注意到，自定义模型前方会有一个"用户"图标，以作区分。
    
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/839a779ee1014c3ab97b27e5bbebacd3~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=869&h=300&s=40840&e=png&b=24262b)
    
2.  **在 Agent 模式下使用**：Trae **允许自定义模型在强大的 Agent 模式（如 `@Builder`）下运行**。这意味着，即使你用的是自己的 API Key，依然能体验到 Trae 最核心的智能体能力。例如，我们向它发出指令："写一个贪吃蛇游戏"。
    
3.  **查看结果**：Trae 的 Agent 会立即开始工作，分析需求、创建文件并自动写入完整的代码。
    
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a13f0cda1ae43a29a4342ee92a53633~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=861&h=667&s=104504&e=png&b=191b1f)
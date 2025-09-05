**当你思路清晰，完全掌控代码时，Tab 补全就是你最好的编程搭档**。它能够预测你接下来想要编写的内容，不仅可以加快你的打字速度，更重要的是让你能够专注于代码的业务逻辑，而不是繁琐的语法细节。在 Trae 中，这项功能由一个名为 Cue 的强大特性驱动，它将代码补全的体验提升到了一个全新的高度。

本章将介绍 Trae Tab 补全的核心功能和使用技巧，帮助你更好地利用它来提高编程效率。

Cue：不止是补全
---------

Cue 是 Trae 提供的一套智能编程工具集。它的中文意思是"提示"，这个词很贴切地描述了它的核心作用。Cue 不仅仅是传统的代码片段补全，它更像一个能够理解你意图的智能助手，支持代码补全、多行修改、修改点预测和跳转等多种功能。它通过分析代码上下文，让繁琐的重复性工作自动化，让你能心无旁骛地进行创造。

核心功能详解
------

Cue 的强大之处体现在它对不同编程场景的深刻理解上。下面我们通过一些示例来逐一了解它的核心功能。

### 1\. 智能代码补全

Cue 能够理解当前文件中的已有代码，并据此续写出高度相关的代码。这是它最基础也最常用的功能。

**示例：** 假设我们已经有了一个根据 ID 查找用户的函数。此时，我们只需要输入一行注释来说明意图，Cue 就能帮我们生成一个全新的、通过邮箱获取用户信息的函数。

```typescript
// 原代码
/**
 * 根据ID获取用户信息
 * @param id 用户ID
 * @param users 用户列表
 * @returns {User} 用户对象
 */
async function getUserById(id: string, users: User[]) {
    // ...函数实现
}
```

输入这行注释后，Cue 会自动补全下面的整个函数

```typescript
// 根据邮箱
```

当 Cue 提供补全建议时，代码会以灰色字体显示，鼠标移动到代码上时，会显示两个按钮提示：Tab 采纳，Esc 拒绝。如果我们继续按 Tab 键，会采纳这个建议。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a499ea4856b49e0be2ed0a4de3e3609~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=701&h=553&s=66757&e=png&b=1c322a) 左侧还有一个绿色的建议图标，点击这个按钮后，也会显示触发代码建议，功能同上面一样。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07e4708107e64ed5a6f47548f8721cb9~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=321&h=141&s=12276&e=png&b=27292e)

最终代码如下：

```typescript
/**
 * 根据邮箱获取用户信息
 * @param email 用户邮箱
 * @param users 用户列表
 * @returns {User} 用户对象
 */
async function getUserByEmail(email: string, users: User[]) {
    const user = await users.find(user => user.email === email);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}
```

### 2\. 多行修改

更进一步，Cue 能够感知代码上下文的变化，并智能地提出跨越多行的修改建议。

**示例：** 我们有一个查找"非活跃"用户的函数 `getInactiveUsers`。

```typescript
/**
 * 查找所有非活跃用户
 * @param users 用户列表
 * @returns {User[]} 非活跃用户列表
 */
async function getInactiveUsers(users: User[]) {
    const inactiveUsers = await users.filter(user => user.status === 'INACTIVE');
    return inactiveUsers;
}
```

现在我们想改为查找"活跃"用户，只需将函数的 JSDoc 注释稍作修改，将 "非活跃" 修改为 "活跃"，Cue 就会立刻理解我们的意图，并建议我们同步修改函数名和内部的判断逻辑。

Cue 会以 Diff 形式建议将函数名改为 `getActiveUsers`，并将判断条件 `INACTIVE` 改为 `ACTIVE`。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/beb47b05a201440289088de2652927a9~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=859&h=321&s=64273&e=png&b=191b1e)

按下 Tab 键后，会采纳这个建议。修改后的代码如下：

```typescript
/**
 * 查找所有活跃用户
 * @param users 用户列表
 * @returns {User[]} 活跃用户列表
 */
async function getActiveUsers(users: User[]) {
    const activeUsers = await users.filter(user => user.status === 'ACTIVE');
    return activeUsers;
}
```

### 3\. 修改点预测

Cue 最智能的一点在于它能预测你接下来可能要做的修改。它会分析你最近的操作和代码结构，主动提示你可能忽略的修改点。

**示例：** 在定义 `User` 类型时，我们为 `id` 字段添加了注释。Cue 会立刻预测到，我们可能也想为其他字段补充注释，并一次性提供所有建议。

```typescript
type User = {
    id: string; // 用户ID
    name: string;
    age: number;
    email: string;
    status: 'ACTIVE' | 'INACTIVE';
}
```

为 `id` 添加注释后，Cue 会建议为 `name`、`age`、`email`、`status` 添加对应的中文注释。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9911fb4a92342f99840e3fc468f221c~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=832&h=208&s=42845&e=png&b=1a1c20)

### 4\. 修改点跳转

当你修改了一个关键标识符（如字段或函数名）后，Cue 会自动在代码的其他引用位置提示你跳转，以完成关联修改，确保代码的一致性。

**示例：** 假设我们最初的 `User` 类型中，用户ID字段名为 `id`。现在我们将其重命名为 `Id`。

```typescript
type User = {
    id: string; // <- 将 "id" 修改为 "Id"
    // ...
}
```

修改后，在之前使用到 `id` 的 `getUserById` 函数中，Cue 会出现一个 "Jump Here" 的提示，引导我们快速跳转到该位置，并将 `user.id`修正为 `user.Id`。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8336871b4af94afeac28e880281f0be5~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=762&h=657&s=86417&e=png&b=191b1e)

按下 `Tab` 即可跳转到需要修改的位置，并查看建议的修改内容。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66ef46604db24ec29cea0b4f49933b8a~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=837&h=578&s=76941&e=png&b=181a1d)

### 5\. 文档内容也能补全

Cue 的能力不仅限于代码，它同样是编写文档和注释的利器。在处理 Markdown 文件或进行任何文本编辑时，它都能帮你提高效率。

**示例：完善 README**

在编写项目 `README.md` 时，Cue 可以帮你快速生成文档内容。

例如，当你输入 `## 项目介绍` 时，Cue 会自动补全一段项目介绍。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e807a293595b41d6a460ad0f51911ee8~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=803&h=313&s=66564&e=png&b=1b1e21)

当你输入 `## 快速开始` 时，Cue 会提示一个快速开始的步骤列表。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf8a42e97c164ae49b14f900cd542c2b~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=264&h=209&s=11541&e=png&b=1a1c1f)

按下 `Tab` 键接受建议后，会生成如下内容：

```markdown
## 快速开始

1. 克隆项目
2. 安装依赖
3. 运行项目
4. 访问项目
```

接着，将光标移动到 `克隆项目` 后面并按下回车，Cue 会根据上下文提示具体的 `git clone` 命令。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1dfd1b9282449b0aaf2570123069a9e~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=759&h=245&s=24073&e=png&b=1a1c20)

当然，根据具体场景和上下文的不同，Cue 提供的建议也会有所不同，有的建议会非常智能，有的建议则可能不太符合你的意图。

快捷键与设置
------

熟练使用快捷键能让你与 Cue 的协作更加流畅。

*   **接受建议**:
    *   `Tab`: 一次性接受整个建议块。
    *   `Ctrl / ⌘ + →`: 逐个单词地接受建议。（不用场景不是很多，更多还是整块的 Tab 建议）
*   **拒绝建议**:
    *   `Esc`: 忽略当前建议。
    *   或者直接输入你的代码，建议也会自动消失。

你也可以随时开启或关闭 Cue。在编辑器右下角的状态栏，鼠标悬浮到 `Tab` 字样上即可看到开关。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/958679437f304200abcdce86d970fff4~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1067&h=437&s=143094&e=png&b=202227)

总结
--

Trae Cue 远不止是一个代码补全工具，它是一个智能的编程伙伴。通过深入理解代码上下文，它能够在代码补全、多行修改、修改点预测和跳转等多个方面为你提供精准的帮助。

如果你的思路清晰，想完全掌控代码时，Cue 就是你最好的编程搭档。
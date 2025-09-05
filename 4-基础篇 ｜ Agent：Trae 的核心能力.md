2025 年被许多人视为"AI Agent"的爆发元年。这个词汇频繁出现在各大技术社区和行业报告中，但对许多人来说，它仍然是一个相对模糊的概念。Agent 究竟是什么？它和我们熟悉的聊天机器人有何不同？它又将如何改变我们的工作方式，尤其是在软件开发领域？

本文将带你了解 Trae 的核心能力 —— Agent。我们将从 Agent 的基本概念出发，结合案例，一步步为你展示如何利用 Trae 内置智能体及创建自定义的智能体。无论你是初次接触 Agent 的新手，还是希望进一步挖掘其潜力的资深用户，都能从中获得启发。

1\. Agent 是什么？
--------------

Agent（智能体）是当前人工智能领域一个备受关注的概念。简单来说，Agent 是一个能够感知环境、自主思考和规划，并采取行动以实现预设目标的智能实体。

它与我们熟悉的聊天机器人（Chatbot）有本质区别。聊天机器人通常被动地响应用户输入，进行一问一答式的交流。相比之下，Agent 是一个主动的行动者。

你可以给 Agent 设定一个更复杂的、需要多个步骤才能完成的目标，例如："调研一下最近流行的前端框架，并生成一份对比报告"。

接到任务后，Agent 会像人类专家一样，将这个大目标分解为一系列子任务：

1.  **规划 (Planning)**：首先，它会确定需要搜索哪些信息源，比较哪些关键指标，比如性能、社区活跃度和学习曲线。
2.  **使用工具 (Tool Use)**：接着，它会调用搜索引擎、API 等工具去收集信息，可能会访问 GitHub、Stack Overflow 等专业网站。
3.  **执行 (Execution)**：然后，它会阅读和整合收集到的数据，进行分析和对比。
4.  **输出 (Output)**：最后，它会将结果整理成一份结构清晰的报告，并写入到你指定的文件中。

在这个过程中，Agent 能够自主地思考"下一步该做什么"，并选择最合适的工具来完成任务。正是这种 **自主规划** 和 **工具调用** 的能力，让 Agent 能够处理更加开放和复杂的现实世界问题，而不仅仅是停留在对话层面。

Trae 的官方 Blog: [@Agent: Rules + Tools to Define Your Future Agents](https://www.trae.ai/blog/product_thought_0428 "https://www.trae.ai/blog/product_thought_0428") 对 Agent 也有一个公式定义：`Agent = PE (Prompt Engineering) + Tools`。这个公式的意思是，Agent 是一个智能体。它不仅能通过提示工程（PE）理解你的意图和上下文，还能使用各种工具（Tools）来执行任务。

2\. Agent First：Trae 的核心架构
--------------------------

> **小提示**：你可以随时使用快捷键 `Command + U` (macOS) 或 `Ctrl + U` (Windows) 来快速打开或关闭右侧的 AI 对话窗口。

Agent 是 Trae 最核心的能力。Trae目前采用了 "Agent-First" 的架构。这意味着整个产品都围绕着 Agent 来设计，让它成为用户解决问题的主要方式。

在早期版本中，Trae 把 Agent 功能拆分成了 `Chat` 和 `Builder` 两种模式。`Chat` 模式更侧重于对话，而 `Builder` 模式则赋予了 Agent 使用工具和执行复杂任务的能力。

为了贯彻"Agent First"的理念，Trae 在 v1.3.1 版本中合并了这两个面板。现在，Trae 默认提供的就是功能更强大的 `Builder` 模式，也就是我们所说的 Agent 模式。

当然，如果你只是需要进行简单的问答，你也可以随时退出智能体模式，切换回纯粹的聊天界面。如下图所示，只需点击输入框中智能体名称旁边的 `x` 号即可。这种设计兼顾了强大功能和简洁体验。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45123b73a42e400ba20fe5fbd33961c5~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=767&h=412&s=36327&e=png&b=191b1e)

3\. Trae 内置智能体：开箱即用
-------------------

Trae IDE 为了让用户能够开箱即用，内置了两款强大的智能体：

*   **Builder**：这是一个通用的项目构建智能体。你可以把它看作是一个全能的开发伙伴。当你需要从零开始创建一个新项目，或者在现有项目中添加新功能时，`Builder` 能够理解你的需求，并自主调用各种工具来完成任务，比如分析代码、编辑文件、执行命令等，高效地帮你实现目标。
*   **Builder with MCP**：这是 `Builder` 的增强版。它在 `Builder` 的所有能力基础上，自动集成了你所配置的 MCP (Model Context Protocol) 服务。我们会在后续介绍 MCP 的章节中详细解释它的用途。

接下来，我们以最常用的 `Builder` 智能体为例，看看它在实际工作中的表现。

**示例 1：编写和运行代码**

假设我们需要实现一个排序算法。我们可以直接向 `Builder` 发出指令：

> "写一个排序算法，将这些数值 \[50, 30, 35, 20\] 按照从小到大排列。注意，你只需要写一个方法即可"

`Builder` 在接收到指令后，会立刻开始工作。如下图所示，它不仅准确地编写了冒泡排序算法，还为我们创建了一个新的 `sort.js` 文件。更棒的是，它还自动执行了这段代码，并在终端中打印出了排序结果。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b83c1ceffcef4937a5a943b36f04dd4e~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=2094&h=1364&s=330426&e=png&b=1a1c20)

这里有一个非常重要的细节值得注意：**代码即时同步**。当 Agent 生成代码后，即使你还没有点击"接受"，这些变更也已经实时保存在了你的本地文件中。这意味着你可以：

1.  立即点击"运行"按钮查看执行结果。
2.  如果你正在开发 Web 应用，可以直接刷新浏览器，实时预览界面的变化。

这种"先试后用"的模式非常方便。你可以先验证代码的效果，如果满意，再点击接受；如果不满意，可以继续让 AI 调整，或者直接拒绝本次修改。

如上图所示，Trae 提供了三种方式来确认你的操作：

*   **接受方式 1**：在右下角 `Builder` 面板的全局操作区，选择"全部接受"或"全部拒绝"。
*   **接受方式 2**：在文件 `sort.js` 的标签页上，对单个文件的所有变更进行确认。
*   **接受方式 3**：在编辑器中，针对具体的代码块进行接受或拒绝。

**示例 2：处理文案工作**

`Builder` 的能力远不止于编写代码。它同样可以胜任各类文案和创意工作。例如，我们输入：

> "写一篇小学作文，主题是'可爱的蚂蚁'，字数 1000 字"

Agent 很快就能生成一篇内容完整、符合要求的文章。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1e7feed16fd42a2a76d00c8070f77d3~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1668&h=941&s=379126&e=png&b=191b1f)

通过这些例子，我们可以看到，`Builder` 智能体是一个强大而灵活的工具，能够极大地提升我们在编码、写作等多种场景下的工作效率。

4\. 创建你的自定义智能体
--------------

虽然 Trae 内置的 `Builder` 智能体功能强大，但在真实的开发场景中，我们往往有更具体、更个性化的需求。比如，你的团队可能遵循特定的编码规范，或者你希望 AI 在与你交流时有特定的语气和风格。为了满足这些需求，Trae 允许你创建完全定制化的智能体。

**为什么要创建自定义智能体？**

自定义智能体可以让你打造一个或多个高度专业化的 AI 助手。你可以为不同的任务创建不同的专家，例如：

*   **"代码审查员"**：一个严格遵守团队代码规范，专门负责审查代码的智能体。
*   **"测试用例生成器"**：一个只专注于根据业务逻辑编写 `Jest` 或 `Go test` 测试用例的智能体。
*   **"API 文档助手"**：一个能根据代码自动生成 `Swagger` 或 `OpenAPI` 格式文档的智能体。

这些专属的智能体能够更精确、更高效地执行特定任务，从而将你的工作流提升到一个新的水平。

**如何创建自定义智能体**

创建过程非常简单。

首先，点击 Trae 界面右上角的 **设置** 图标，然后在下拉菜单中选择 **智能体**。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4fa88054b454804822f92468aaa797b~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=668&h=203&s=17917&e=png&b=17191c)

接着，在弹出的智能体管理面板中，点击 **\+ 创建智能体** 按钮。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2a510d26fdc40e0a2c3f421f0fd615a~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=661&h=401&s=33993&e=png&b=1d2024)

这样，你就进入了智能体的配置页面。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20abcfedb69c48d0ae6c3b0498d17ccb~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=692&h=783&s=71010&e=png&b=1b1d21)

在这个配置页面，你需要定义智能体的核心属性：

*   **名称**：为你的智能体起一个易于识别的名字。
*   **提示词 (Prompt)**：这是最关键的一步。在这里，你将为智能体设定详细的"行为准则"。你可以定义它的角色、工作流程、沟通风格以及需要遵守的规则。一个好的提示词是打造高效智能体的基础。
*   **工具 (Tools)**：在这里为你的智能体授予执行任务所需的权限。它能做什么，完全取决于你为它选择了哪些工具。
    *   **工具 - MCP**：允许智能体调用外部服务，比如你自建的 API 或第三方服务。
    *   **工具 - 内置**：
        *   **文件系统**：授权后，智能体才能读取、修改或创建你项目中的文件。
        *   **终端**：允许智能体执行 `npm install`、`go run` 等终端命令。
        *   **联网搜索**：让智能体可以上网搜索最新的技术文档或解决方案。
        *   **预览**：如果智能体生成了可预览的前端页面，会自动提供预览入口。

**示例：创建一个"前端代码审查员"**

让我们来动手创建一个专门负责审查前端代码的智能体。

1.  **填写配置**：
    
    *   **名称**：`前端代码审查员`
        
    *   **提示词**：
        
        ```markdown
        你是一个严格的前端代码审查专家。你的任务是分析我提供的代码，并确保它遵循以下规范：
        1.  所有的 JavaScript/TypeScript 文件必须符合 Prettier 格式化标准。
        2.  所有的 CSS 属性必须按照字母顺序排列。
        3.  组件文件名必须使用大驼峰命名法 (PascalCase)，工具函数文件名必须使用小驼峰命名法 (camelCase)。
        4.  禁止在代码中使用 console.log。
        
        如果发现不符合规范的代码，请直接提出具体的修改建议，并提供修改后的完整代码。
        
        ```
        
    *   **工具选择**：勾选 **文件系统** (用于读取和修改代码)。
        
2.  **创建智能体**： 点击 **创建** 按钮后，系统会提示创建成功。你可以选择 **立即使用**。
    

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdd2b6c5950049b1aa5769df0ab6e34a~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=672&h=815&s=103914&e=png&b=151619)

**如何使用自定义智能体**

现在，让我们用这个新创建的智能体来审查一段有问题的代码。

假设我们在 `test.js` 文件中有以下代码：

```javascript
function get_user_info() {
    let user = {
        name: 'ai',
        age: 18
    }
    console.log(user)
    return user;
}

get_user_info();
```

这段代码存在多个不符合我们预设规范的地方。

1.  **选择智能体**： 在 AI 对话框中输入 `@`，然后在弹出的列表中选择我们刚刚创建的 **前端代码审查员**。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8119a43716de4e2c9a5f88f6ebb17ef3~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=784&h=324&s=43814&e=png&b=1e2024)
    
2.  **下达指令**： 向它发出审查指令："检查代码是否规范"
    
3.  **获取审查结果**： 智能体接收到指令后，会立刻开始分析 `test.js` 文件。它会根据我们设定的规则，精准地找出所有问题，并提供修改后的代码。
    
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1204da040fec482b96abd4cabe6e856a~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1226&h=1184&s=192221&e=png&b=1a1c20)
    

从上图可以看到，我们的"前端代码审查员" 按照预设的规则指出了所有存在的问题：

*   **文件名不规范**：指出了 `test.js` 应该使用小驼峰命名法。
*   **函数命名不规范**：指出了 `get_user_info` 使用了下划线命名，建议改为 `getUserInfo`。
*   **禁止使用 console.log**：发现了代码中违规使用的 `console.log`。
*   **代码格式问题**：对代码进行了 `Prettier` 格式化，比如补全了分号。
*   **提供了修改方案**：直接生成了符合所有规范的最终代码，方便我们一键应用。

通过这个例子，你可以看到自定义智能体的强大之处。通过一次简单的配置，就能得到一个永远不知疲倦、严格遵守规则的专属 AI 助手。

5\. 管理你的自定义智能体
--------------

创建好的智能体并不是一成不变的。随着你工作流的演进，你可能需要对它进行调整。Trae 提供了简单而强大的管理功能。

在智能体管理列表中，将鼠标悬停在你创建的智能体上，点击右侧出现的设置图标，就可以看到一个菜单，包含了 **编辑**、**分享** 和 **删除** 的选项。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67f3400260714f8ea96a44c7de751bbf~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=772&h=482&s=43499&e=png&b=1d2024)

*   **编辑**：如果发现智能体的表现不符合预期，或者想为它增加新的能力，可以随时点击"编辑"回到配置页面，修改它的提示词或增删工具。
*   **删除**：当某个智能体不再被需要时，可以将其彻底删除。

**分享与导入：知识的流动**

"分享"是 Trae 的一个亮点功能。它让你能将精心打造的 AI 助手分享给同事或整个开发者社区，促进知识和高效工作流的传播。

1.  **分享智能体** 点击 **分享** 按钮后，会弹出一个分享对话框。在这里，你可以看到该智能体的核心配置。出于安全考虑，Trae 会提醒你在分享前，检查并移除提示词和 MCP 配置中可能存在的敏感信息（如 API Key）。 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec4c18c94d146b391bf944a0ff3be22~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=546&h=409&s=35403&e=png&b=232429)
    
    你可以选择 **分享至 X** (Twitter)，或者 **复制链接**。点击复制链接后，你会得到一段类似这样的文本：
    
    > 我用Trae 做了一个有意思的Agent 「前端代码审查员」。 点击 [s.trae.ai/a/1b7699](https://s.trae.ai/a/1b7699 "https://s.trae.ai/a/1b7699") 立即复刻，一起来玩吧！
    
2.  **导入智能体** 当你的朋友在浏览器中打开这个分享链接时，会看到一个 Trae Agent 的页面。
    
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b53ba29e4edb424ab06b2bb678abbecc~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1025&h=723&s=71988&e=png&b=17191c)
    
    浏览器会提示是否在 Trae IDE 中打开此链接。打开后会跳转到 Trae IDE，如下所示 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35074c50c6ca482090c3916aed32fdaa~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=577&h=580&s=80181&e=png&b=212226)
    
    确认后，Trae IDE 会自动拉取并展示这个智能体的配置信息，供你最终确认。  
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35f682373f664905b6b52888ab100638~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=778&h=1002&s=135419&e=png&b=1b1d21)
    
    点击 **立即获取**，这个智能体就被成功复制到了你的列表中。Trae 会自动为你导航到它的配置页面，方便你进行二次修改。如果名称有冲突，Trae 还会贴心地为你重命名（例如，`前端代码审查员_1`）。
    

6\. 自动运行：提升效率的利器
----------------

为了让 Agent 的工作流更加顺畅，Trae 提供了 **自动运行** 功能。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d55ddfa6e2f04483908f5388a40bf96d~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=777&h=843&s=73078&e=png&b=1c1f23)

开启后，Agent 在执行模型认为安全的命令和 MCP 工具时，将不再需要你手动确认，从而实现更高程度的自动化。为了安全，Trae 默认提供了一个命令黑名单（如 `rm`, `kill` 等），被列入黑名单的危险命令在执行前依然会请求用户授权。

> **安全提示**：开启"自动运行"功能可能会增加外部提示词注入（Prompt Injection）的风险，请在充分评估后谨慎使用。

7\. 其他实用功能
----------

除了强大的 Agent 核心能力，Trae 还提供了一些贴心的小功能，让你的开发体验更加流畅。

#### 回滚操作

在与 Agent 的多轮对话中，我们有时可能希望撤销上一步的操作，回到之前的状态。比如，AI 的回答不符合预期，或者你改变了主意。

将鼠标悬停在你的提问上，点击出现的"回退到本轮对话发起前"图标。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ff5fde03fcd46ac85f7a282eeb4ba20~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=747&h=238&s=43429&e=png&b=191b1e)

系统会弹出一个确认框，提示你此操作不仅会撤销对话，还会恢复 AI 在该回合中对文件所做的所有修改。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12677d97f97e4bbf8c4d3a9ef2206563~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=729&h=214&s=24851&e=png&b=191b1e)

点击"确定"后，整个对话和相关文件都会回到你发起提问之前的状态，让你能重新编辑问题并发起新的请求。 ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad160702a5f949f896b750f7fb67988d~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=757&h=406&s=36838&e=png&b=191b1e)

#### 删除单条消息

如果你只是想简单地移除某一条消息（无论是你的还是 AI 的），而不是回滚整个回合，可以使用删除功能。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b52cf84d555471487d694aa4d1b4c3e~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=749&h=240&s=40285&e=png&b=191c1f)

#### 会话管理

为了方便管理不同的任务和对话，Trae 提供了多会话功能。在 AI 对话窗口的右上角，你可以：

*   点击 **新建会话** 图标，开启一个全新的、无上下文的对话。
*   点击 **历史会话** 图标，查看并切换到之前的对话记录。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ef13d689253427894626501c7dd54a7~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=757&h=114&s=12050&e=png&b=191b1e)

总结
--

通过本文的介绍，我们从 Agent 的基本定义出发，深入探索了它在 Trae IDE 中的各种应用。我们了解到，Trae 不仅仅是将 Agent 作为一个辅助工具，而是将其作为整个产品的核心，构建了"Agent-First"的架构。

从开箱即用的内置 `Builder`，到可以根据个人需求无限定制的专属智能体，Trae Agent 为我们展示了新一代 AI 辅助开发的巨大潜力。通过精心设计的提示词和灵活的工具授权，我们可以将繁琐、重复的任务交给 Agent，让自己更专注于创造性的工作。而便捷的分享功能，更是让优秀的实践得以在团队和社区中快速流动。

希望本文能帮助你更好地理解和使用 Trae Agent。现在，不妨就动手创建属于你的第一个自定义智能体，开启更高效、更智能的编程之旅吧。

* * *

**参考资料:**

*   Trae Agent 官方文档: [docs.trae.ai/ide/agent#2…](https://docs.trae.ai/ide/agent#22b373dd "https://docs.trae.ai/ide/agent#22b373dd")
*   Trae Blog: [@Agent: Rules + Tools to Define Your Future Agents](https://www.trae.ai/blog/product_thought_0428 "https://www.trae.ai/blog/product_thought_0428")
*   Trae Blog: [More Agentic](https://www.trae.ai/blog/product_thought_0526 "https://www.trae.ai/blog/product_thought_0526")
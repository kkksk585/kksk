1\. 什么是 Trae？它能做什么？
-------------------

Trae 是一款致力于将开发者打造为"真正的 AI 工程师"（The Real AI Engineer）的智能 IDE。它基于 VS Code 开发，加入了 AI 功能，旨在无缝融入你的日常开发流程。特别是对于已经习惯了 VS Code 的用户来说，Trae 的安装和使用非常简单。

与传统 IDE 不同，Trae 的核心优势在于其深度集成的 AI 辅助能力。你可以把它看作一个拥有 "智能大脑" 的编码伙伴，它能够与你默契配合，帮助你更高质量、更有效率地完成编码、调试、测试等一系列开发任务。无论是代码的自动补全、智能重构，还是理解整个项目上下文的问答，Trae 都能提供强大的支持。

2\. Trae 国内版与国际版：有何区别？
----------------------

Trae 为了更好地服务全球用户，推出了两个主要的版本：国内版和国际版。它们在 IDE 核心功能上完全一致，但在访问地址、账号体系、AI 模型支持和定价策略上，存在一些关键区别。

*   **访问官网与下载**:
    
    *   **国内版**: 官网地址为 `https://www.trae.com.cn/`，服务器位于国内，访问速度更快、更稳定。
    *   **国际版**: 官网地址为 `https://www.trae.ai/`，面向全球用户。
*   **账号登录体系**:
    
    *   **国内版**: 支持使用国内手机号或稀土掘金社区账号进行登录，更符合国内用户的使用习惯。
    *   **国际版**: 支持使用 GitHub、Google 账号进行一键登录，也支持常规的邮箱注册，方便国际开发者。
*   **网络要求**:
    
    *   **国内版**: 正常网络环境下即可流畅使用。
    *   **国际版**: 在首次登录验证时，通常需要"科学上网"才能顺利访问登录服务。不过，一个非常实用的点是，一旦成功登录之后，后续的日常编码使用，即使没有"科学上网"环境，一般也能正常进行。
*   **核心差异：AI 模型支持**: 这是两个版本之间**最大**的区别。
    
    *   **国际版**：集成了全球顶尖的 AI 模型，如 Anthropic 的 Claude 系列、Google 的 Gemini 系列、OpenAI 的 GPT 系列以及 DeepSeek 的模型。 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72515f758d464189baf94f16bdec25af~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=857&h=746&s=93407&e=png&b=24262b)
    *   **国内版**：集成了国内优秀的 AI 模型，如豆包系列和 DeepSeek 系列。  
        ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65d7068b999a433885bade648afd3264~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=915&h=1075&s=85144&e=png&b=1c1e22)
*   **多模态能力：图片上传**:
    
    *   **国际版**: 除了 DeepSeek 模型外，其余大部分模型（如 Claude、GPT-4o、Gemini）均支持图片上传，你可以发送图片让 AI 理解和分析。
    *   **国内版**: 目前所有模型均**不**支持图片上传功能。
*   **定价策略与费用**:
    
    *   **国内版**: 目前（截至 2024 年 6 月）提供完全免费的使用。
    *   **国际版**: 提供了灵活的订阅计划。新用户可以享受优惠，也提供了包含一定免费额度的 Free plan 供用户体验。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4de285461ca94ba1aa7090e4d21df675~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1041&h=695&s=268159&e=png&b=15171b)
*   **并行安装**: 两个版本可以同时安装在同一台电脑上，互不干扰。安装后，国内版应用名称会标识为 `Trae CN`，国际版则为 `Trae`，便于区分。 ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f367010da9e344abb16c053bef042b9d~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=444&h=203&s=33071&e=png&b=252819)
    

3\. Trae 安装与初次配置指南
------------------

首先，需要注意的是 Trae 目前主要支持 macOS 和 Windows 系统，Linux 版本即将推出，用户可以先行注册加入等待列表。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f959ef6ec934de3b33c7ba879b86e4e~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1494&h=734&s=88914&e=png&b=15171b)

Trae 的安装过程非常简洁直观，无论你选择国内版还是国际版，整体步骤都基本相同。

**第一步：下载安装包**

*   访问国内版官网 `https://www.trae.com.cn/` 或国际版官网 `https://www.trae.ai/`。
    
*   首页的下载按钮会自动识别你的操作系统（macOS / Windows / Linux）并提供对应的安装包。
    
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05b3024a4e5d42a0b54c53b23461f393~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1090&h=541&s=162572&e=png&b=121418) _国内版官网首页_ ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70164f69b839448da73d6815207f3172~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1118&h=517&s=164186&e=png&b=111317) _国际版官网首页_
    

**第二步：逐步完成安装设置**

下载并打开安装包后，你会看到一个清晰的设置向导。

1.  **欢迎使用**: 这是安装的起始页面，直接点击"开始"即可。
    
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b0aa8f72de74583912b06354ed910dd~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=923&h=630&s=25375&e=png&b=17191c)
    
2.  **选择主题与语言**: Trae 内置了"暗色"、"亮色"、"深蓝"三种主题，并支持多种语言，你可以根据个人偏好进行选择。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/653d4c676f0c44b4a0327e69e2d4dc87~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=924&h=637&s=36792&e=png&b=191b1e)
    
3.  **导入配置**: 为了让你快速上手，Trae 支持从 VS Code 或 Cursor 一键导入现有的配置，包括插件、设置、快捷键和代码片段等，极大地降低了迁移成本。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8476c0a40f19405a840e0e83193ac513~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=920&h=591&s=52561&e=png&b=181a1d)
    
4.  **添加命令行**: 这是非常推荐的一步。安装 `trae` 命令行后，你就可以像在 VS Code 中使用 `code .` 一样，在终端里通过 `trae .` 命令快速用 Trae 打开当前项目，非常高效。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b787772953b49c893edd95029b4da88~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=855&h=556&s=41510&e=png&b=181a1d)
    
5.  **完成安装与登录**: 看到这个界面，就意味着 Trae IDE 已经成功安装到你的电脑上了。接下来，你需要登录账号以激活其全部的 AI 功能。  
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aec89544a0424a50a837efa8dd292854~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=956&h=554&s=26207&e=png&b=17191c) **第三步：登录 Trae 账号**
    

根据你安装的版本，登录方式有所不同：

*   **国内版登录**: 你可以选择使用手机号接收验证码登录，或者直接用你的掘金账号授权登录。  
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d1becd38f7440f38208fc554a2871a5~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=800&h=529&s=42544&e=png&b=111317)
    
*   **国际版登录**: 你可以使用 GitHub 或 Google 账号进行一键授权登录，也可以选择使用邮箱和密码进行注册登录。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7822bd08aebc44cbac5b9e14d0d4f0ea~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=788&h=643&s=52057&e=png&b=111317)
    

> **请注意**: 如前所述，登录国际版时，请确保你的网络环境可以访问国际互联网服务。成功登录一次后，后续使用基本不受影响。

4\. Trae 界面与核心功能导览
------------------

Trae 拥有一个现代化且对开发者友好的用户界面。当你首次打开应用但还未选择项目时，会看到一个简洁的欢迎界面，引导你打开或克隆一个项目。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd8ffcdcc1748ea96823810b39cee5f~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=2559&h=1439&s=172672&e=png&b=1a1c20)

当你用 Trae 打开一个项目文件夹后，可以看到其经典的 IDE 布局：左侧是文件资源管理器，中间是代码编辑区，右侧则是其灵魂所在——AI 对话窗口。你可以随时在这里与 AI 协作，进行编码、问答或执行其他任务。 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/635bbab01c5d49d5abf62e9b2b52a1a7~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=2549&h=1439&s=226256&e=png&b=1a1c1f)

点击界面右上角的用户头像，可以拉起主菜单。在这里，你可以轻松管理个人账户、切换主题和语言、进入"AI 功能管理"来配置智能体、上下文、规则等高级 AI 功能，以及进行其他 IDE 相关的设置。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93df08899bea44a5aead007b5017c81f~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=838&h=837&s=73379&e=png&b=25272c)

5\. 如何选择版本与模型？
--------------

虽然国内版和国际版在 IDE 功能上没有区别，但核心的 AI 能力差异决定了它们适用于不同的场景。

**模型选择建议**:

*   **复杂编程与项目开发**: 对于复杂的编程任务，首推国际版的 **Claude 系列模型**（如 Claude4、Claude-3.7-Sonnet），它们在代码生成、逻辑推理和遵循指令方面表现非常出色，代码编程方向的首选模型。最新的 **Gemini 2.5 Pro** 也是一个强有力的选择。
*   **通用推理与对话**: 国内的 **DeepSeek-Reasoner(R1)** 模型在通用推理任务上表现优异，适合进行深入的技术探讨和逻辑分析。

**总结与建议**:

如果你追求最前沿、最强大的 AI 编码能力，并且需要处理复杂的项目，建议使用**国际版**。模型能力上的优势，能为你带来巨大的效率提升。

如果你的网络环境受限，或者更习惯使用国内的服务生态，**国内版** 为你提供了一个新的选择，它所集成的模型也能应对一些日常开发场景。

由于两个版本可以共存，你完全可以同时安装，根据不同的任务需求，在两个版本间无缝切换。

6\. 隐私与安全：Trae 会收集我的代码吗？
------------------------

对于任何开发者来说，代码资产的安全和隐私都是至关重要的。在使用 Trae 这样深度集成 AI 能力的工具时，大家自然会关心："我的代码会被上传吗？是否存在泄露风险？"

根据 Trae 官方发布的[隐私政策](https://www.trae.ai/privacy-policy "https://www.trae.ai/privacy-policy")，其对用户数据的处理方式是透明的。总的来说，Trae 采取了"本地为主，必要时上传"的策略来平衡 AI 功能的强大与用户代码的安全性。

以下是根据其隐私政策总结的关键点：

*   **代码库文件默认存储在本地**
    
    *   这是最核心的一点。你的项目代码、文件和目录结构都安全地存储在你自己的电脑上，Trae 不会主动将其整个上传到云端。
*   **什么情况下代码会被上传？**
    
    1.  **为了代码库索引（Codebase Indexing）**：为了让 AI 能够理解你的整个项目（即"上下文"），Trae 会将你的代码库文件**临时上传**到服务器，用于计算和生成"嵌入"（Embeddings）。嵌入是一种让机器理解代码语义的数学表示，它不包含原始的明文代码。
    2.  **与 AI 聊天时**：当你在 AI 对话框中主动输入信息，无论是提问还是粘贴代码片段（Snippets），这些你**主动输入**的内容会被收集并发送给其背后的大语言模型（如 Claude、GPT 等），以便为你生成回答和建议。
*   **代码上传后的处理方式**
    
    *   **永久删除明文代码**：在为代码库计算完嵌入之后，Trae 的服务器会**永久删除所有明文代码**。服务器只保留生成的嵌入向量和相关的元数据（如文件路径），用于 AI 的上下文理解。
    *   **AI 聊天内容**：你发送给 AI 的聊天内容，包括代码片段，会被用于支持和改进 AI 服务。
*   **数据控制方**
    
    *   根据其隐私政策，Trae 平台由位于新加坡的 `SPRING (SG) PTE. LTD.` 提供和控制。

**总结来说**：你的完整代码库不会被永久存储在 Trae 的服务器上。只有在你需要 AI 理解整个项目时，代码才会**临时**上传用于生成**不含明文代码**的索引；以及在你主动与 AI 聊天时，你**输入**的代码片段才会被发送给大模型。

这种处理方式在行业内是相对标准的，旨在确保 AI 功能的有效性的同时，最大程度地保护用户的代码隐私和安全。如果你对此仍有疑虑，建议详细阅读其官方[隐私政策](https://www.trae.ai/privacy-policy "https://www.trae.ai/privacy-policy")全文。
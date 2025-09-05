与 AI 编程助手对话的质量，很大程度上取决于你提供给它的"上下文"。上下文可以是一段代码、一个文件、甚至整个项目。提供精准的上下文，能让 Trae 更深入地理解你的意图，给出更贴切、更准确的回答。本文将带你全面了解 Trae 强大的上下文功能，助你把它打造成心有灵犀的编程伙伴。

核心上下文用法
-------

在日常开发中，我们有多种方式为 Trae 提供上下文信息。

### 1\. 编辑器中的代码

这是最常用、最直接的方式。

*   **当前文件**：当你向 Trae 提问时，它默认就能"看到"你当前正在编辑的文件。你可以直接就当前文件的内容进行提问。
*   **选中代码**：如果你只想针对文件中的某一部分代码（例如一个函数或一个代码块）提问，只需选中那段代码，点击悬浮菜单中的"添加到对话"按钮，或使用快捷键 `Cmd + U` (macOS) / `Ctrl + U` (Windows) 即可。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/078b81f7f397454496c91a9056ecbb99~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=2022&h=551&s=169361&e=png&b=191b1e)

> Trae 在这里的交互体验非常出色，选中的代码块会作为一个独立的"上下文标签"显示在输入框中，你可以自由地在它的前后输入描述文字。这比很多工具只能将代码固定在输入框上方的设计要灵活得多。

### 2\. 终端中的内容

程序的报错信息是解决 Bug 的关键线索。Trae 可以直接读取终端的输出内容。当你的程序运行出错时，只需：

1.  在终端中，点击包含报错信息的输出内容片段。
2.  点击右上角的"添加到对话"按钮。

这样，Trae 就能看到完整的错误堆栈，帮助你快速定位并修复问题。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d86be369d2fb497bbfb9478f0823ef09~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1853&h=931&s=219838&e=png&b=191b1e)

代码索引：让 Trae 成为你的项目专家
--------------------

代码索引是 Trae 理解整个项目的基石。它会扫描你的项目文件，并创建一个"地图"（即索引），帮助 AI 快速导航和理解代码库的结构与关系。

### 为什么需要代码索引？

*   **回答更准确**：AI 能基于整个项目的知识来回答问题，而不是猜测。
*   **理解跨文件关系**：轻松理解函数调用、类继承等跨文件逻辑。
*   **重构建议更精准**：进行全局性的代码重构和优化。

### 如何管理索引？

通常，Trae 会自动为小型项目（文件数小于 5000）创建索引，你基本无需干预。对于大型项目，你可以在 AI 对话框右上角的 **设置 > 上下文 > 代码索引管理** 中手动管理。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/368b3156b8614da2b839cbba1d5b6307~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=760&h=518&s=83744&e=png&b=191c1f)

在这里，你可以：

*   **重新构建**：当代码库发生大的变化或你修改了忽略文件列表后，手动更新索引。
*   **清空**：删除当前项目的索引。删除时会有确认提示，并告知预计释放的磁盘空间。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28c3067b9ca548ef86f2c9ecdd4e5879~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=745&h=668&s=96399&e=png&b=16181b)

### 忽略文件：保护你的敏感信息

不是项目中的所有文件都应该被 AI 看到，例如包含密码的配置文件、本地开发环境的日志等。Trae 允许你精确地控制哪些文件需要被排除在索引之外。

Trae 默认会遵守 `.gitignore` 文件中的规则。此外，你还可以创建一个 `.ignore` 文件来进行更精细的控制。

1.  在 **设置 > 上下文 > 忽略文件** 中点击 **配置忽略文件**。
2.  Trae 会自动创建并打开一个 `.ignore` 文件。
3.  在文件中添加你要忽略的文件或目录规则，例如：
    
    ```ignore
    # 忽略所有 .log 文件
    *.log
    
    # 忽略整个 build 目录
    /build/
    
    # 忽略特定的配置文件
    secrets.json
    ```
    
4.  保存文件后，记得 **重新构建索引** 使其生效。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4d14e466790488888985e55e5ca8b63~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1306&h=546&s=102755&e=png&b=191b1f)

使用 `#` 符号：上下文的瑞士军刀
------------------

`#` 符号是 Trae 中一个极其强大的功能，它让你能够灵活、精确地指定多种来源的上下文。你可以在对话输入框中输入 `#` 或直接点击输入框左侧的 `# 上下文` 按钮来唤起上下文菜单。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d12b9fcb3c924b95a83e96090c01409c~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=729&h=463&s=35331&e=png&b=202327)

### `#Folder` 和 `#Workspace`：解锁项目级理解

`#Folder` 和 `#Workspace` 是 Trae 的"大杀器"，它们能让 AI 从更高维度理解你的项目。

*   **`#Folder`**：将整个文件夹作为上下文，适用于分析一个模块或一组相关组件。
*   **`#Workspace`**：将整个项目作为上下文，当你需要进行全局重构、添加新功能或快速了解一个陌生项目时，这个功能非常有用。

**重要提示**：`#Folder` 和 `#Workspace` 的强大能力依赖于 **代码索引**。如果索引未完成，AI 的回答可能不完整。

**实际应用：`#Workspace` 快速理解新项目**

让我们来看一个实际例子，体验一下 `#Workspace` 的威力。假设你刚接触一个开源的图片压缩项目：`https://github.com/qufei1993/compressor`。

1.  将项目克隆到本地，并用 Trae 打开。
2.  等待 Trae 自动完成代码索引。
3.  在 AI 对话框中，输入 `#Workspace`，然后提出你的问题，例如："介绍下这个项目的作用和使用的技术栈"。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9dade50a32e45f6b55c07f5c0612312~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=815&h=204&s=32017&e=png&b=181a1d)

Trae 会立即开始分析整个项目。从下方的结果可以看到，它自动引用了 `README.md`、`.gitignore` 以及核心的 `.ts` 文件等共计 101 个上下文，然后给出了非常精准和全面的回答，涵盖了项目作用、技术栈和核心功能。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c53aaa8fed9e4701a2edfc9c1ade47fd~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=815&h=909&s=167220&e=png&b=191c1f)

这个过程完美展示了代码索引结合 `#Workspace` 的强大能力，它能让你在几分钟内对一个陌生的项目建立起准确的宏观认识。

### `#Code`：聚焦函数与类

当你想要讨论某个具体的函数或类时，`#Code` 是最佳选择。它会将指定代码块作为上下文，而不是整个文件。

*   **使用方法**：输入 `#Code` 后，Trae 会列出当前文件中的函数和类。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e0ad625d03145179df48a4b50795db9~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=753&h=489&s=61318&e=png&b=181a1d)

### `#File`：指定单个或多个文件

如果你的问题涉及多个文件，或者需要 AI 理解单个文件的全部内容，可以使用 `#File`。

*   **使用方法**：输入 `#File` 后，Trae 会推荐最近打开过的文件。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/246c9db491f549f3a052a9af699f689c~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=756&h=636&s=69599&e=png&b=202327)

如果推荐的不是你想要的，可以直接输入文件名或关键词进行搜索。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6cd980b58b54fb39f6526967e2890ca~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=718&h=268&s=28399&e=png&b=1e2125)

此外，Trae 还支持直接从资源管理器将文件拖拽到对话输入框中，非常方便。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4557c24e62f14ceb81b46adbc5651a0f~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=1308&h=541&s=82076&e=png&b=1b1d21)

### `#Doc`：打造你的私人知识库

除了代码，Trae 还能索引你的外部文档，如技术手册、API 文档、项目笔记等，打造一个随叫随到的私人知识库。这就是 `#Doc` 功能。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12a23381a1ea45608941db9f69f523b6~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=762&h=792&s=95172&e=png&b=191b1f)

你可以通过两种方式添加文档集：

**1\. 从 URL 添加**

如果你的文档托管在网站上（例如 Confluence, Docusaurus 站点），可以直接通过 URL 添加。

*   **操作**：在上下文设置中，选择 **添加文档集 > 通过 URL 添加**，然后输入名称和入口 URL。
*   **抓取规则**：Trae 会从入口 URL 开始，自动抓取同一域名下、同级或子级路径下最多三次跳转的页面内容。
*   **过程**：索引过程需要一些时间，取决于网站大小和网络速度。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab884249825343fe92ded3a1459156f3~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=699&h=407&s=44583&e=png&b=2a2c32)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f055fa7260eb437284f2ddb2a9104721~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=723&h=248&s=25193&e=png&b=1b1d21)

从 URL 添加，Trae 官方有段声明：

> 在使用本工具时，应遵循目标网址的规则，合法合规使用本工具。本工具仅支持查看公开可访问的技术文档类网站，用于学习、研究的目的，感谢你的理解与配合。
> 
> Trae IDE 在扫描页面时将会严格遵循网页的 /robots.txt 规范，若被网站拒绝则无法正常索引，索引页面列表中将展示 "网站限制无法访问"。

**2\. 从本地文件添加**

你也可以将本地的 Markdown (`.md`) 或纯文本 (`.txt`) 文件添加进来。

*   **操作**：选择 **从本地文件添加**，然后选择包含文档的文件夹。
*   **限制**：支持 `.md` / `.txt`，单个文件最大 10MB，文档集最大 50MB，最多 1000 个文件。
*   **速度**：本地文件索引速度通常比 URL 快得多。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92d25ef8a4ab4766b783fae7ffb57fee~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=603&h=480&s=49757&e=png&b=31333a)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b3cd9588c674c499a95d1c49b978f17~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=711&h=517&s=43577&e=png&b=1f2227)

**如何使用文档集**

1.  在输入框中输入 `#Doc`，Trae 会列出你已添加的所有文档集。
    
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd751d664a6a4f5c8ac10a024284ed9f~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=702&h=358&s=43712&e=png&b=181a1d)
    
2.  选择一个文档集作为上下文，然后提出你的问题。Trae 会基于该文档集的内容进行回答。 ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf946b87205944809d2b4671c85bf467~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=723&h=159&s=23506&e=png&b=181a1d)
    
3.  Trae 会精确地引用文档集中的相关文件，并给出答案。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01e8ee6c5a61419db16914ec883dc967~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=745&h=919&s=157183&e=png&b=191b1e)
    

> **关于数据隐私** 根据 Trae 的官方说明，创建文档集时，内容会被传输到服务器进行矢量化处理，但 Trae **不会存储** 你的任何文档数据。处理完成后，矢量数据会返回并存储在你的本地设备上。

### `#Web`：即时联网搜索

当需要获取最新信息或项目代码库之外的知识时，可以使用 `#Web` 功能。它提供两种模式：

**1\. 全局联网搜索**

直接输入 `#Web` 加上你的问题，Trae 会在全网搜索相关内容并生成回答。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1018cabbafa429893fd2c6e01235470~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=718&h=159&s=19680&e=png&b=181a1d)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3832b1bdff114ac090e57701d365c136~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=735&h=912&s=166280&e=png&b=191b1e) **2\. 指定网址搜索**

如果你想让 Trae 基于某个特定网页或网站的内容来回答，可以在输入框中先输入网址，再输入问题。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a792a60038e142b6820ad912544ce7c1~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=729&h=146&s=18310&e=png&b=181a1d)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b61fe69a27824d56847f3b39f566f690~tplv-k3u1fbpfcp-jj-mark:1600:0:0:0:q75.jpg#?w=800&h=885&s=159730&e=png&b=1c1e22)

总结：成为 Trae 上下文大师
----------------

我们已经探索了 Trae 丰富而强大的上下文功能。掌握它们，是将 Trae 从一个"聊天机器人"变为一个真正"懂你代码"的智能伙伴的关键。

回顾一下，我们拥有一个立体的上下文工具箱：

| 上下文类型 | 核心用途 | 最佳场景 |
| :-- | :-- | :-- |
| **代码/终端片段** | 最直接、最聚焦 | 解释单段代码、修复特定错误 |
| **`#Code` / `#File`** | 文件和符号级精确控制 | 重构函数、理解模块、跨文件追踪 |
| **`#Folder` / `#Workspace`** | 项目级宏观理解 | 快速上手新项目、进行全局性分析或重构 |
| **`#Doc`** | 外部知识库 | 基于团队文档或 API 手册进行开发 |
| **`#Web`** | 实时在线信息 | 查询最新技术、解决未知问题 |

**致胜策略：**

1.  **精准原则**：问题越具体，上下文就应该越精确。修复一个 bug，从错误信息和 `#Code` 开始，而不是直接上 `#Workspace`。
2.  **组合的力量**：不要忘记你可以组合使用上下文。一个典型的场景是：`终端错误` + `#File(fileA.ts)` + `#Code(functionInB.ts)` + `"为什么A调用B会出这个错？"`。
3.  **内外兼修**：将项目内的 `#Workspace` 和外部的 `#Doc`、`#Web` 结合，让 AI 同时具备项目深度和领域广度。
4.  **保持健康**：定期更新代码索引，尤其是在大规模重构后。善用忽略文件，不仅保护隐私，也能提升索引效率和 AI 的专注度。

善用上下文，意味着你能用更少的精力，获得更高质量的 AI 辅助。
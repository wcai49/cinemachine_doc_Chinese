### About Cinemachine 【关于Cinemachine】
![Cinemachine](../Figures/AboutCinemachine/Cinemachine_Intro.png)

Cinemachine是Unity中用于控制操作camera的一系列模块。它可以用于解决为了实现关于镜头间的目标跟踪、组合、协调、和切换效果而产生的复杂数学和逻辑问题。一句话描述来说，Cinemachine就是为显著减少开发过程中，手动调试和修改unity脚本（script）所耗费的大量时间而生的。

Cinemachine的程序性使得其在使用过程中不易产生bug。当你在调试过程中——例如，改变你Scene中的一个animation，载具速度，地面，或是其他GameObject时——Cinemachine会通过动态调整它的行为，来获得最好的镜头效果（注：例如，当你移动到墙边时，它会自动调整camera位置，避免穿墙或其他影响游戏性的问题）。假如你的人物的动作由之前的向右转变成了向左转，你也不需要重新为camera编写新的script脚本。

Cinemachine 适用于所有类型的游戏，包括， 第三人称射击，2D， 横板过关，3/4视角，和RTS游戏。无论你的游戏里需要多少种视角，它都可以胜任。它的模块化系统让你可以自己组合各种复杂的camera动作和行为。

Cinemachine与Unity的其他工具的兼容性很好，可以作为时间轴、动画、和后期处理等assets的补充。你也可以创造自己的插件、或是编写自定义的camera script后与之配合使用。



### 安装Cinemachine

Cinemachine是完全免费的。和其他package安装的过程一样，在Unity-> Window-> package manager中搜索Cinemachine，就可以下载安装至你的项目中。

安装完成后， 一个新的菜单 GameObject > Cinemachine 就会出现。你也可以通过右击Hierarchy面板面板内的任意GameObject来访问这个菜单。

![通过Hierarchy面板访问Cinemachine菜单](../Figures/AboutCinemachine/access-through-hierarchy.png)

### 相关要求
Cinemachine没有额外的依赖，只需要安装即可使用。如果你刚好因为HDRP或URP的volume相关功能而使用到了Post Processing, 那么我们也提供了适配模块 - 通过ifdef指令保护这个过程，当检测到Post Processing时，该指令就会自动启用。

类似ifdef保护类指令的还有很多，用于其他packages的调整优化， 例如Timeline， 和Pixel-Perfect等。

当前版本的Cinemachine适用于以下版本的Unity引擎：

- 2023.1 或更新版本

### 从之前版本的Cinemachine升级
Cinemachine 3.0 是一个从CM 2.X版本的重大版本变更，它的API和数据格式都发生了显著的变化。对于CM 2.X API编写的脚本，如果不进行手动调整，那么在3.X版本中是无法运行的。此外，你的项目中的CM Camera实例也需要进行升级。

虽然可以从CM 2.X版本升级现有的项目，但是你应该仔细考虑是否愿意进行这项工作。在很多情况下，最好还是坚持使用CM 2.X版本，因为它将继续在与CM 3.X并行支持的一段时间内得到支持。如果你选择升级你的项目，请参阅此处的升级指南。

### 从旧的Asset Store版本的Cinemachine升级
如果你已经从UnityAsset Store安装了Cinemachine，那么你可以在Cinemachine Package中将其升级。在这种情况下，我们建议你升级到Cinemachine 2.X版本，在大多数情况下，升级是完全自动的。

升级的步骤：

1.   在Unity引擎（2019.4或更新的版本）中，打开你的项目；

2.   保存你当前的Scene，以免丢失；

3.   创建一个新的、空的Scene；

4.   在Project窗口中，删除Cinemachine Asset和任何你可能安装的适配CinemachinePostProcessing的asset文件夹；

5.   安装Cinemachine 2.x版本的package。

### 导入示例场景
Cinemachine 包含了一些示例场景，用于展示如何在真实的场景中使用它的功能。

要将Cinemachine示例导入到你的项目中：

1. 菜单栏中选择 Window > Package Manager；
2. 在Package manager的available packages中找到Cinemachine并选择它。 在package description下面，有一个Samples的列表，其中包含可用的示例场景。
3. 选择Import来下载并安装示例场景和资源。 

![Import Samples示例](../Figures/AboutCinemachine/import_samples.png)

Unity会将导入的示例场景放置在你的项目的Asset文件夹下，路径为：Assets > Samples > Cinemachine > [version number] > Cinemachine Example Scenes。

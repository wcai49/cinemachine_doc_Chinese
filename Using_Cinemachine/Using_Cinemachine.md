# 使用Cinemachine

当使用Cinemachine时，你需要重新认识调试camera这项工作。例如，你有可能曾经花费了很多的时间和精力，去写控制camera行为的script；然而使用Cinemachine做这件事，可以在更短的时间内获得至少相同的效果。

## Virtual Cameras （虚拟摄像机）

Cinemachine不会去创建一个新的camera。相反，它的原理是指导Unity的camera去拍摄不同的摄像角度，开发者通过Virtual cameras（以下都称为虚拟摄像机）来完成这些组合拍摄的效果，而非创造很多个camera出来。Virtual camera会移动和旋转Unity的camera，并且控制Unity camera的相关设置。

这些虚拟摄像机就是Unity camera分离出来的GameObjects，它们各自完全独立。例如，在一个Scene的Hierarchy面板中，很可能会有很多虚拟摄像机像这样分布：

![Cinemachine](https://github.com/wcai49/cinemachine_doc_Chinese/blob/main/Figures/using_cinemachine_seperate.png)

虚拟摄像机的主要任务是：
  - 将Scene中的camera定位
  - 将camera对准某个东西
  - 为camera添加一些噪音（Noise）。噪音用于模拟各种场景，例如手持摄像或载具摇晃等

Cinemachine鼓励开发者多创造一些虚拟摄像机，得益于这些虚拟摄像机被设计为占用处理器性能很少的特点, 通常拥有很多的虚拟摄像机也不会影响性能。当然，如果你的Scene对于性能要求很高，也可以在一些特定时段内，将除了必要的以外其他的虚拟摄像机禁用，以获得最好的性能表现。

推荐的做法是，为每一次单独拍摄使用（创建）单独的虚拟摄像机，利用这一做法来创造戏剧性，或微妙的混剪等效果。例如：
  - 对于两个角色互相对话的过场动画场景，使用三个虚拟摄像机:一个摄像机用于两个角色都在内的中间镜头，再分别用两个单独的虚拟摄像机处理每个角色的特写镜头。使用Timeline将音频与虚拟摄像机同步。
  - 复制一个已有的虚拟摄像机，使两个虚拟相机在Scene中处于完全相同的位置。对于第二个虚拟摄像机，改变FOV或构图的设置。当玩家触发了某个触发器（trigger）时，Cinemachine可以将第一台虚拟摄像机混合至第二台，通过两台虚拟摄像机的混合来强调动作的变化等效果。

一台虚拟摄像机可以随时控制Unity camera的各项属性。此时它就是**实时虚拟摄像机**。 当然也有例外情况，当这台虚拟摄像机正在混合至下一台时，两者都为实时的。

## Cinemachine Brain

Cinemachine Brain是Unity Camera中的一个component（你可以选则camera，后在inspection面板里找到它）。它会监控Scene中所有被激活的虚拟摄像机。通过激活、取消激活你所需要的虚拟摄像机，从而告知Cinemachine Brain下一个你想要设为实时的虚拟摄像机。Cinemachine brain会选择最近一次被激活的虚拟摄像机，再结合优先度的属性，从而设定哪一个虚拟摄像机成为实时的。当需要切换到另一个摄像机时，它会呈现出剪辑（cut）或混合（blend）的，类似视频剪辑的效果完成转场。

#### 小提示：
在实时（realtime）情况中， 使用cinemachine brain来处理动态的游戏事件（game events），这样就可以通过控制优先级属性的方式来操控camera，迎合你的游戏运行逻辑。这个控制摄像机的方法在实际游戏运行的过程中非常有效，因为玩家在游戏中的操作是不可预测的。

使用Cinemachine Timeline来为可预测的情况编排摄像机动作，例如转场等。Timeline会覆盖Brain的优先级系统的逻辑，让你更精确地掌控摄像机每一帧的控制。

## 移动与瞄准

使用虚拟摄像机的Body属性来定义它在Scene中的移动方式；使用Aim属性来定义如何旋转它。

一台虚拟摄像机拥有两个目标属性：
  - Follow target， 定义虚拟摄像机将与之一同移动的物体；
  - Look At target， 定义虚拟摄像机将对准的物体。

Cinemachine包含了一整套用于控制移动和瞄准的程序算法。 每一种算法用于解决某一特定的问题， 并且你也可以自定义一些属性来满足你的一些具体的需求。Cinemachine将这些算法通过**CinemachineComponent**的形式提供给开发者， 开发者可以使用**CinemachineComponent class**来执行一些移动和瞄准的行为。

Body属性提供了如下的程序算法，供开发者设置虚拟摄像机在Scene中的移动行为：
  - **Transposer**: 以一个固定的关系去跟随目标。有阻尼属性供选择；
  - **Do Nothing**: 不移动虚拟摄像机；
  - **Framing Transposer**: 在屏幕空间内，以一个固定的关系去跟随目标。有阻尼属性供选择；
  - **Orbital Transposer**: 根据变量关系与Follow目标移动；（一般多）接受玩家的操作输入控制；（例如，魔兽世界点击左键可以旋转相机，滚轮可以控制远近，译者注）
  - **Tracked Dolly**: 沿着预定义的路径移动；
  - **Hard Lock to Target**: 使用与Follow目标完全相同的位置。

Aim属性提供了如下的程序性算法，来旋转虚拟摄像机以达到瞄准Look At目标的目的：

  - **Composer**: 使Look At目标保持在相机框架中，并附加复合的约束条件；
  - **Group Composer**: 使多个Look At目标保持在相机框架中；
  - **Do Noting**: 不旋转虚拟摄像机；
  - **POV**: 根据用户的游戏输入值旋转虚拟摄像机；
  - **Same As Follow Target**: 当Follow Target一起旋转；
  - **Hard Look At**: 将Look At目标保持在相机框架的正中央。

## 构建一个镜头

你将在Framing Transposer， Composer， 和Group Composer这三个算法的帮助下，通过定义好摄像机每一帧画面的不同区域的方法，来构建你的一个拍摄镜头。下面是这些区域的定义：

  - **Dead zone**： Cinemachine会将你之前设置的target目标保持在这个区域中；
  - **Soft zone**： 如果target目标进入到了该区域，那么摄像机会重新移动定位，直至target目标回**dead zone**。这个重新定位的过程可快可慢，取决于你在Damping设置中设定的时间长短；
  - **Screen**： 


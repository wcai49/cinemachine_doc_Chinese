# 使用Cinemachine

使用Cinemachine需要你用一种新的思考方式来处理Unity的Camera。例如，您可能已经在精心编写Camera行为这件事投入了大量时间和精力，但是，Cinemachine可以在更短的时间内提供相同甚至更好的结果。

## Cinemachine Cameras

Cinemachine不会创建新的Camera。相反，它会为多个镜头指定一个Unity摄像机。您可以使用CinemachineCameras（有时也称为Virtual Cameras）来组合这些镜头。 CinemachineCameras移动和旋转Unity Camera并控制其相关的属性设置。

CinemachineCameras是与Unity Camera分开的GameObject，并且行为独立。它们不嵌套在彼此内部。例如，在一个Scene的Hierarchy面板中，很可能会有很多虚拟摄像机像这样分布：

![CinemachineVirtualCamera](../Figures/using_cinemachine_seperate.png)

CinemachineCamera为您执行的主要任务：
  - 将Unity camera定位在场景中。
  - 将Unity camera对准某个东西
  - 为Unity camera添加一些噪音（Noise）。噪音用于模拟各种场景，例如手持摄像或载具摇晃等

Cinemachine鼓励您创建许多CinemachineCameras。 CinemachineCamera旨在消耗很少的处理能力。如果您的场景对性能敏感，请在任何时候仅激活必要的CinemachineCameras以获得最佳性能。

建议您为单个镜头使用单个CinemachineCamera。利用这一做法来创造戏剧性，或微妙的混剪等效果。例如：

  - 对于两个角色互相对话的过场动画场景，使用三个虚拟摄像机:一个摄像机用于两个角色都在内的中间镜头，再分别用两个单独的虚拟摄像机处理每个角色的特写镜头。使用Timeline将音频与虚拟摄像机同步。
  - 复制一个已有的虚拟摄像机，使两个虚拟相机在Scene中处于完全相同的位置。对于第二个虚拟摄像机，改变FOV或构图的设置。当玩家触发了某个触发器（trigger）时，Cinemachine可以将第一台虚拟摄像机混合至第二台，通过两台虚拟摄像机的混合来强调动作的变化等效果。

任何时候都有一个CinemachineCamera控制Unity摄像机。这是**实时**的CinemachineCamera。此规则的例外情况是从一个CinemachineCamera切换镜头到下一个时。在镜头切换渲染期间，两个CinemachineCameras都是实时的。

## Cinemachine Brain

Cinemachine Brain是Unity Camera中的一个component（你可以选则camera，后在inspection面板里找到它）。它会监控Scene中所有被激活的虚拟摄像机。通过激活、取消激活你所需要的虚拟摄像机，从而告知Cinemachine Brain下一个你想要设为实时的虚拟摄像机。Cinemachine brain会选择最近一次被激活的虚拟摄像机，再结合优先度的属性，从而设定哪一个虚拟摄像机成为实时的。当需要切换到另一个摄像机时，它会呈现出剪辑（cut）或混合（blend）的，类似视频剪辑的效果完成转场。

#### 小提示：
在实时（realtime）情况中， 使用cinemachine brain来处理动态的游戏事件（game events），这样就可以通过控制优先级属性的方式来操控camera，迎合你的游戏运行逻辑。这个控制摄像机的方法在实际游戏运行的过程中非常有效，因为玩家在游戏中的操作是不可预测的。

使用Cinemachine Timeline来为可预测的情况编排摄像机动作，例如转场等。Timeline会覆盖Brain的优先级系统的逻辑，让你更精确地掌控摄像机每一帧的控制。

## 定位与对准

使用CinemachineCamera中的Position Control属性指定如何在场景中移动它。使用Rotation Control属性指定如何瞄准它。

默认情况下，CinemachineCamera拥有一个Tracking Target，这个设定用于两个目的：

  - 指定CinemachineCamera要跟随移动的GameObject（位置控制）。
  - 指定LookAt目标，即要Cinemachine对准的GameObject（旋转控制）。


一台虚拟摄像机拥有两个目标属性：
  - Follow target， 定义虚拟摄像机将跟随并与之一同移动的物体；
  - Look At target， 定义虚拟摄像机将对准的物体。

如果要为这些目的使用两个不同的GameObject，则可以在CinemachineCamera的inspector中启用Separate LookAt Target选项：

![Two Targets](../Figures/set_two_targets.png)

Cinemachine包含了一整套用于控制移动和瞄准的程序算法。 每一种算法用于解决某一特定的问题， 并且你也可以自定义一些属性来满足你的一些具体的需求。Cinemachine将这些算法通过**CinemachineComponent**的形式提供给开发者， 开发者可以使用**CinemachineComponent class**来执行一些移动和瞄准的行为。

Position Control属性提供以下过程算法，供开发者设置Cinemachine Camera在Scene中的移动行为：
  - Tracking: 以一个固定的关系去跟随目标。有阻尼属性供选择；
  - Position Composer: 在屏幕空间内，以一个固定的关系去跟随目标。有阻尼属性供选择；
  - Orbital Follow: 根据变量关系与Follow目标移动；接受玩家的操作输入控制；
  - Spline Dolly: 沿着预定义的路径移动；
  - Hard Lock to Target: 使用与Follow目标完全相同的位置；
  - Third Person Follow: 将相机放置在一个可配置的刚体上，该刚体附着于目标。该刚体会随着目标旋转。这对于TPS和POV相机非常有用；
  - Do Nothing: 不移动虚拟摄像机。位置由虚拟摄像机的transform控制，可以通过自定义脚本控制。

Rotation Control属性提供了如下的程序性算法，来旋转Cinemachine以达到瞄准Look At目标的目的：

  - Composer: 使Look At目标保持在相机框架中，并附加复合的约束条件；
  - Pan Tilt: 根据用户的游戏输入值旋转虚拟摄像机；
  - Same As Follow Target: 当Follow Target一起旋转；
  - Hard Look At: 将Look At目标保持在相机框架的正中央；
  - Do Nothing: 不旋转虚拟摄像机。旋转由虚拟摄像机的transform控制，可以通过自定义脚本控制。

## 构建一个镜头

Position Composer和Rotation Composer算法为你定义了摄像机画面中的不同区域，以便你构建一个镜头：

  - Dead zone： Cinemachine会将你之前设置的target目标保持在这个区域中；
  - Soft zone： 如果target目标进入到了该区域，那么摄像机会重新移动定位，直至target目标回**dead zone**。这个重新定位的过程可快可慢，取决于你在Damping设置中设定的时间长短；
  - Screen Position： Dead zone中心的屏幕位置。数值0.5即是屏幕的中心；
  - Damping： 该属性模拟了一个真实的操作摄像机人员在操作很重的摄像机时会造成的延迟。该属性体现了当target进入到soft zone的时候，摄像机跟随target的快慢。使用较小的数值可以模拟出反应更快的摄像机，摄像机会迅速移动或瞄准来保持target在dead zone中。较大的数值则模拟出重型摄像机，较大的值意味着Cinemachine允许target在soft zone中移动的距离更远。

下方图片为Cinemacchine的Game Window Guides，它为上述几个区域的提供了可视化的展示。在Unity的Game窗口内，按照不同的颜色区分。

![Cinemachine](../Figures/tinted_areas.png)

中间空白的区域为dead zone。蓝色的区域为soft zone。 dead zone和soft zone为屏幕的实际位置。红色的区域为no pass区，cinemachine的target永远不会被放进该区域。黄色的正方形标记了当前的target位置。

开发者通过调整这些区域的分布，来使camera获得各种镜头行为。可以在Unity的Game窗口内拖拽各个区域的边界线，或者在inspector窗口重调整各项数值。例如，输入更大的damping值，来模拟更重的摄像机设备的拍摄效果。也可以扩大soft zone和dead zone的区域，从而达到忽略target移动带来的影响。

（译者注：这里的意思应当是：扩大了dead zone和soft zone之后，屏幕和target的比例就会变大，镜头变远，形成远景镜头效果。此时物体进行移动的时候，摄像机也不会有大幅度的移动。相反，如果镜头与target距离很近，就会形成特写镜头的效果，如果target进行移动，那么摄像机也需要随之大幅度移动）。

## 使用Noise来模拟镜头晃动

在现实世界中，真实的摄像机通常十分笨重。这些摄像机通过摄像师手持，或安置在移动的载具上进行拍摄。使用Noise属性可以去模拟出这些真实的摄像机的特性，从而达到电影级的效果。例如，当跟随一个跑步的角色时，可以添加一个摄像机晃动的效果，从而让玩家更加沉浸在游戏中。

在每一帧更新的时候，Cinemachine会在摄像机跟随target的基础上，另外添加一些噪声。这些噪声不会影响到摄像机在未来帧中的位置。这种分离的方式可以保证一些属性，比如damping的表现。

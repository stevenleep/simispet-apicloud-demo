

const appJson = {
    "name": "root",
    title: "标题",
    hideNavigationBar: false,
    navigationBar: {
        height: 45,           //（可选项）导航栏高度。默认值45。数字类型
        background: "#fff",             //（可选项）导航栏背景。支持颜色值和图片，默认值#fff，字符串类型
        shadow: "#ddd",         //（可选项）导航栏底部阴影线颜色。默认值#ddd，字符串类型
        color: "#000",              //（可选项）导航栏标题文字颜色。默认值#000，字符串类型
        fontSize: 17,              //（可选项）导航栏标题字体大小。默认值17，数字类型
        fontWeight: 'normal',          //（可选项）导航栏标题字体粗细。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
        fontFamily: "",         //（可选项）导航栏标题字体。只支持iOS，字符串类型
        hideBackButton: false
    },
    "tabBar": {
        height: 54,             //（可选项）标签栏高度。默认值54。数字类型
        background: "#fff",               //（可选项）标签栏背景。支持颜色值和图片，默认值#fff，字符串类型
        shadow: "#ddd", //（可选项）标签栏顶部阴影线颜色。默认值#ddd，字符串类型
        color: "#000",           //（可选项）标签栏各项的文字颜色。默认值#000，字符串类型
        selectedColor: "#000",           //（可选项）标签栏各项选中状态的文字颜色。默认值#000，字符串类型
        fontSize: 10,               //（可选项）标签栏各项文字字体大小。默认值10，数字类型
        fontWeight: "normal",              //（可选项）标签栏各项文字字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
        fontFamily: '',           //（可选项）标签栏各项文字字体。只支持iOS，字符串类型
        textOffset: 2,             //（可选项）标签栏各项文字距离底部的距离。默认值2，数字类型
        animated: false,              //（可选项）选中标签栏每项时，切换对应的页面是否带有动画效果，默认值false。布尔类型
        scrollEnabled: true,           //（可选项）标签栏每项对应的页面间是否能够左右滚动切换，默认值true。布尔类型
        index: 0,                //（可选项）默认选中项的索引。默认值0。数字类型
        preload: 0
    },                 //（可选项）预加载的页面个数。默认值0。数字类型
    "frames": [{
        "title": "页面一",
        "name": "page1",
        "url": "widget://pages/demo/demo.stml"
    }, {
        "title": "页面二",
        "name": "page2",
        "url": "widget://pages/demo/demo.stml"
    }, {
        "title": "页面三",
        "name": "page3",
        "url": "widget://pages/demo/demo.stml"
    }],
    "list": [{
        text: "主页",
        iconPath: "../../image/tabbar/home.png",
        selectedIconPath: "../../image/tabbar/home_selected.png"
    }, {
        text: "分类",
        iconPath: "../../image/tabbar/category.png",
        selectedIconPath: "../../image/tabbar/category_selected.png"
    }, {
        text: "我的",
        iconPath: "../../image/tabbar/user.png",
        selectedIconPath: "../../image/tabbar/user_selected.png"
    }],         //（可选项）是否隐藏默认返回按钮。如果传了leftButtons，hideBackButton参数失效。返回按钮由箭头图标和前一个页面的标题组成，若前一个页面未设置标题，则按钮文字为“返回”。可以通过监听navbackbtn或keyback事件来处理返回按钮的点击事件。布尔类型
    leftButtons:              //（可选项）导航栏左边按钮组。左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
        [{
            text: "返回",         //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
            color: "#000",              //（可选项）按钮标题文字颜色，默认值#000，字符串类型
            fontSize: 17,           //（可选项）按钮标题字体大小。默认值17，数字类型
            fontWeight: "normal",         //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
            fontFamily: "",    //（可选项）按钮标题字体。只支持iOS，字符串类型
            iconPath: "https://img.yangyongan.com/7tfun.png",          //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
            scale: 4,               //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
        }],
    rightButtons:             //（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
        [{
            text: "更多",            //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
            color: "#000",         //（可选项）按钮标题文字颜色，默认值#000，字符串类型
            fontSize: 17,            //（可选项）按钮标题字体大小。默认值17，数字类型
            fontWeight: "normal",     //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
            fontFamily: "",       //（可选项）按钮标题字体。只支持iOS，字符串类型
            iconPath: "https://img.yangyongan.com/yxtpl.png",        //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
            scale: 4         //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
        }]
}

avm.define("tab-layout", class TabLayout extends Component {


    data = {
        index: 0
    }

    install() {
        if (api.platform === 'app') {
            const { frames, list, leftButtons, rightButtons, ...json } = Object.assign(appJson, this.props);;
            json.tabBar.frames = frames;
            json.tabBar.list = list;
            json.navigationBar.leftButtons = leftButtons;
            json.navigationBar.rightButtons = rightButtons;
            json.name = 'main'
            api.openTabLayout(json);
        }
    }

    clickHandler = (name, extra) => {
        api.sendEvent({ name, extra });
        if (name === 'tabitembtn') {
            this.data.index = extra.index;
        }
    }

    render(props) {

        const classPrefix = 'avm__tab-layout';
        props = Object.assign(appJson, props);

        let current = { title: props.title, name: props.name }

        if (!props.hideTabBar) {
            if (typeof props.tabBar === 'undefined'
                || typeof props.list === 'undefined'
                || typeof props.frames === 'undefined'
                || props.list.length === 0
                || props.frames.length === 0) {
                current.name = 'Tabbar 的配置项出错';
                props.hideTabBar = true;
            } else {
                current = props.frames[this.data.index];
                current.title = current.title || props.tabBar.index
                current.name = current.name || current.url || current.title;
            }
        }


        return <div class={classNames(classPrefix)}>
            {props.hideNavigationBar || <div class={`${classPrefix}__header`} style={{
                height: props.navigationBar.height + 'px',
                background: props.navigationBar.background,
                fontSize: props.navigationBar.fontSize + 'px',
                boxShadow: '0 1px ' + props.navigationBar.shadow,
            }}>

                <div class={classPrefix + '__header-left'}>
                    {props.leftButtons.map((b, index) => <div class={classPrefix + '__header-left-item'}
                        onClick={this.clickHandler.bind(this, 'navitembtn', { type: 'left', index })}
                    >
                        <img src={b.iconPath} alt="" />
                        <div class="text" style={{
                            color: b.color,
                            fontSize: b.fontSize + 'px',
                            fontWidget: b.fontWeight,
                        }}>{b.text}</div>
                    </div>)}
                </div>
                <div class={classPrefix + '__header-title'} onClick={this.clickHandler.bind(this, 'navtitle')}> {current.title}</div>
                <div class={classPrefix + '__header-right'}>

                    {props.rightButtons.map((b, index) => <div class={classPrefix + '__header-right-item'}
                        onClick={this.clickHandler.bind(this, 'navitembtn', { type: 'right', index })}
                    >
                        <img src={b.iconPath} alt="" />
                        <div class="text" style={{
                            color: b.color,
                            fontSize: b.fontSize + 'px',
                            fontWidget: b.fontWeight,
                        }}>{b.text}</div>
                    </div>)}

                </div>
            </div>}
            <div class={`${classPrefix}__body`}>
                {current.name}
            </div>
            {props.hideTabBar || <div class={`${classPrefix}__footer`} style={{
                height: props.tabBar.height + 'px',
                background: props.tabBar.background,
                fontSize: props.tabBar.fontSize + 'px',
                boxShadow: '0 -1px ' + props.tabBar.shadow,
            }}>
                {props.list.map((item, index) => <div class={`${classPrefix}__footer-item`}
                    onClick={this.clickHandler.bind(this, 'tabitembtn', { index })}
                >
                    <img src={this.data.index === index ? item.selectedIconPath : item.iconPath} alt={"图标"} />
                    <div style={{
                        color: this.data.index === index ? props.tabBar.selectedColor : props.tabBar.color
                    }}>{item.text}</div>
                </div>)}
            </div>}
        </div>
    }

    css = () => {
        return `
        
        .avm__tab-layout {
            height: 100%;
            width: 100%;
            font-size: 16px;
            color: #333;
            display: flex;
            flex-direction: column;
            background: #f1f1f1;
          }
          .avm__tab-layout__header {
            z-index: 99;
            display: flex;
            flex-direction: row;
          }
          .avm__tab-layout__header-left,
          .avm__tab-layout__header-right {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            min-width: 50px;
          }
          .avm__tab-layout__header-left-item,
          .avm__tab-layout__header-right-item {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            margin: 2px;
          }
          .avm__tab-layout__header-left-item img,
          .avm__tab-layout__header-right-item img {
            width: 22px;
          }
          .avm__tab-layout__header-title {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 20px;
          }
          .avm__tab-layout__footer {
            display: flex;
            flex-direction: row;
          }
          .avm__tab-layout__footer-item {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
          }
          .avm__tab-layout__footer-item img {
            width: 32px;
          }
          .avm__tab-layout__body {
            flex: 1;
            background: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
          }
          
        
        `
    }


})

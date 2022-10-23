(function() {
	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;

		_setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
		if (source == null) return {};
		var target = {};
		var sourceKeys = Object.keys(source);
		var key, i;

		for (i = 0; i < sourceKeys.length; i++) {
			key = sourceKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			target[key] = source[key];
		}

		return target;
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	var _excluded = ["frames", "list", "leftButtons", "rightButtons"];

	var appJson = {
		name: "root",
		title: "标题",
		hideNavigationBar: false,
		navigationBar: {
			height: 45, //（可选项）导航栏高度。默认值45。数字类型
			background: "#fff", //（可选项）导航栏背景。支持颜色值和图片，默认值#fff，字符串类型
			shadow: "#ddd", //（可选项）导航栏底部阴影线颜色。默认值#ddd，字符串类型
			color: "#000", //（可选项）导航栏标题文字颜色。默认值#000，字符串类型
			fontSize: 17, //（可选项）导航栏标题字体大小。默认值17，数字类型
			fontWeight: "normal", //（可选项）导航栏标题字体粗细。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
			fontFamily: "", //（可选项）导航栏标题字体。只支持iOS，字符串类型
			hideBackButton: false
		},

		tabBar: {
			height: 54, //（可选项）标签栏高度。默认值54。数字类型
			background: "#fff", //（可选项）标签栏背景。支持颜色值和图片，默认值#fff，字符串类型
			shadow: "#ddd", //（可选项）标签栏顶部阴影线颜色。默认值#ddd，字符串类型
			color: "#000", //（可选项）标签栏各项的文字颜色。默认值#000，字符串类型
			selectedColor: "#000", //（可选项）标签栏各项选中状态的文字颜色。默认值#000，字符串类型
			fontSize: 10, //（可选项）标签栏各项文字字体大小。默认值10，数字类型
			fontWeight: "normal", //（可选项）标签栏各项文字字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
			fontFamily: "", //（可选项）标签栏各项文字字体。只支持iOS，字符串类型
			textOffset: 2, //（可选项）标签栏各项文字距离底部的距离。默认值2，数字类型
			animated: false, //（可选项）选中标签栏每项时，切换对应的页面是否带有动画效果，默认值false。布尔类型
			scrollEnabled: true, //（可选项）标签栏每项对应的页面间是否能够左右滚动切换，默认值true。布尔类型
			index: 0, //（可选项）默认选中项的索引。默认值0。数字类型
			preload: 0
		},
		//（可选项）预加载的页面个数。默认值0。数字类型
		frames: [
			{
				title: "页面一",
				name: "page1",
				url: "widget://pages/demo/demo.stml"
			},
			{
				title: "页面二",
				name: "page2",
				url: "widget://pages/demo/demo.stml"
			},
			{
				title: "页面三",
				name: "page3",
				url: "widget://pages/demo/demo.stml"
			}
		],

		list: [
			{
				text: "主页",
				iconPath: "../../image/tabbar/home.png",
				selectedIconPath: "../../image/tabbar/home_selected.png"
			},
			{
				text: "分类",
				iconPath: "../../image/tabbar/category.png",
				selectedIconPath: "../../image/tabbar/category_selected.png"
			},
			{
				text: "我的",
				iconPath: "../../image/tabbar/user.png",
				selectedIconPath: "../../image/tabbar/user_selected.png"
			}
		],
		//（可选项）是否隐藏默认返回按钮。如果传了leftButtons，hideBackButton参数失效。返回按钮由箭头图标和前一个页面的标题组成，若前一个页面未设置标题，则按钮文字为“返回”。可以通过监听navbackbtn或keyback事件来处理返回按钮的点击事件。布尔类型
		//（可选项）导航栏左边按钮组。左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
		leftButtons: [
			{
				text: "返回", //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
				color: "#000", //（可选项）按钮标题文字颜色，默认值#000，字符串类型
				fontSize: 17, //（可选项）按钮标题字体大小。默认值17，数字类型
				fontWeight: "normal", //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
				fontFamily: "", //（可选项）按钮标题字体。只支持iOS，字符串类型
				iconPath: "https://img.yangyongan.com/7tfun.png", //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
				scale: 4 //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
			}
		],
		//（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
		rightButtons: [
			{
				text: "更多", //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
				color: "#000", //（可选项）按钮标题文字颜色，默认值#000，字符串类型
				fontSize: 17, //（可选项）按钮标题字体大小。默认值17，数字类型
				fontWeight: "normal", //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
				fontFamily: "", //（可选项）按钮标题字体。只支持iOS，字符串类型
				iconPath: "https://img.yangyongan.com/yxtpl.png", //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
				scale: 4 //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
			}
		]
	};

	avm.define(
		"tab-layout",
		/*#__PURE__*/ (function(_Component) {
			_inheritsLoose(TabLayout, _Component);
			function TabLayout() {
				var _this;
				for (
					var _len = arguments.length, args = new Array(_len), _key = 0;
					_key < _len;
					_key++
				) {
					args[_key] = arguments[_key];
				}
				_this = _Component.call.apply(_Component, [this].concat(args)) || this;
				_defineProperty(
					_assertThisInitialized(_this),
					"data",

					{
						index: 0
					}
				);
				_defineProperty(
					_assertThisInitialized(_this),
					"clickHandler",

					function(name, extra) {
						api.sendEvent({name: name, extra: extra});
						if (name === "tabitembtn") {
							_this.data.index = extra.index;
						}
					}
				);
				_defineProperty(
					_assertThisInitialized(_this),
					"css",

					function() {
						return "\n        \n        .avm__tab-layout {\n            height: 100%;\n            width: 100%;\n            font-size: 16px;\n            color: #333;\n            display: flex;\n            flex-direction: column;\n            background: #f1f1f1;\n          }\n          .avm__tab-layout__header {\n            z-index: 99;\n            display: flex;\n            flex-direction: row;\n          }\n          .avm__tab-layout__header-left,\n          .avm__tab-layout__header-right {\n            display: flex;\n            flex-flow: row nowrap;\n            justify-content: center;\n            align-items: center;\n            min-width: 50px;\n          }\n          .avm__tab-layout__header-left-item,\n          .avm__tab-layout__header-right-item {\n            display: flex;\n            flex-flow: row nowrap;\n            align-items: center;\n            margin: 2px;\n          }\n          .avm__tab-layout__header-left-item img,\n          .avm__tab-layout__header-right-item img {\n            width: 22px;\n          }\n          .avm__tab-layout__header-title {\n            flex: 1;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            padding: 0 20px;\n          }\n          .avm__tab-layout__footer {\n            display: flex;\n            flex-direction: row;\n          }\n          .avm__tab-layout__footer-item {\n            display: flex;\n            flex-direction: column;\n            flex: 1;\n            align-items: center;\n          }\n          .avm__tab-layout__footer-item img {\n            width: 32px;\n          }\n          .avm__tab-layout__body {\n            flex: 1;\n            background: #f9f9f9;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: #999;\n          }\n          \n        \n        ";
					}
				);
				return _this;
			}
			var _proto = TabLayout.prototype;
			_proto.install = function install() {
				if (api.platform === "app") {
					var _Object$assign = Object.assign(appJson, this.props),
						frames = _Object$assign.frames,
						list = _Object$assign.list,
						leftButtons = _Object$assign.leftButtons,
						rightButtons = _Object$assign.rightButtons,
						json = _objectWithoutPropertiesLoose(_Object$assign, _excluded);
					json.tabBar.frames = frames;
					json.tabBar.list = list;
					json.navigationBar.leftButtons = leftButtons;
					json.navigationBar.rightButtons = rightButtons;
					json.name = "main";
					api.openTabLayout(json);
				}
			};
			_proto.render = function render(props) {
				var _this2 = this;
				var classPrefix = "avm__tab-layout";
				props = Object.assign(appJson, props);
				var current = {title: props.title, name: props.name};
				if (!props.hideTabBar) {
					if (
						typeof props.tabBar === "undefined" ||
						typeof props.list === "undefined" ||
						typeof props.frames === "undefined" ||
						props.list.length === 0 ||
						props.frames.length === 0
					) {
						current.name = "Tabbar 的配置项出错";
						props.hideTabBar = true;
					} else {
						current = props.frames[this.data.index];
						current.title = current.title || props.tabBar.index;
						current.name = current.name || current.url || current.title;
					}
				}
				return apivm.h(
					"div",
					{class: classNames(classPrefix)},
					props.hideNavigationBar ||
						apivm.h(
							"div",
							{
								class: classPrefix + "__header",
								style: {
									height: props.navigationBar.height + "px",
									background: props.navigationBar.background,
									fontSize: props.navigationBar.fontSize + "px",
									boxShadow: "0 1px " + props.navigationBar.shadow
								}
							},
							apivm.h(
								"div",
								{class: classPrefix + "__header-left"},
								props.leftButtons.map(function(b, index) {
									return apivm.h(
										"div",
										{
											class: classPrefix + "__header-left-item",
											onClick: _this2.clickHandler.bind(_this2, "navitembtn", {
												type: "left",
												index: index
											})
										},
										apivm.h("img", {src: b.iconPath, alt: ""}),
										apivm.h(
											"div",
											{
												class: "text",
												style: {
													color: b.color,
													fontSize: b.fontSize + "px",
													fontWidget: b.fontWeight
												}
											},
											b.text
										)
									);
								})
							),
							apivm.h(
								"div",
								{
									class: classPrefix + "__header-title",
									onClick: this.clickHandler.bind(this, "navtitle")
								},
								" ",
								current.title
							),
							apivm.h(
								"div",
								{class: classPrefix + "__header-right"},
								props.rightButtons.map(function(b, index) {
									return apivm.h(
										"div",
										{
											class: classPrefix + "__header-right-item",
											onClick: _this2.clickHandler.bind(_this2, "navitembtn", {
												type: "right",
												index: index
											})
										},
										apivm.h("img", {src: b.iconPath, alt: ""}),
										apivm.h(
											"div",
											{
												class: "text",
												style: {
													color: b.color,
													fontSize: b.fontSize + "px",
													fontWidget: b.fontWeight
												}
											},
											b.text
										)
									);
								})
							)
						),
					apivm.h("div", {class: classPrefix + "__body"}, current.name),
					props.hideTabBar ||
						apivm.h(
							"div",
							{
								class: classPrefix + "__footer",
								style: {
									height: props.tabBar.height + "px",
									background: props.tabBar.background,
									fontSize: props.tabBar.fontSize + "px",
									boxShadow: "0 -1px " + props.tabBar.shadow
								}
							},
							props.list.map(function(item, index) {
								return apivm.h(
									"div",
									{
										class: classPrefix + "__footer-item",
										onClick: _this2.clickHandler.bind(_this2, "tabitembtn", {
											index: index
										})
									},
									apivm.h("img", {
										src:
											_this2.data.index === index ? item.selectedIconPath : item.iconPath,
										alt: "图标"
									}),
									apivm.h(
										"div",
										{
											style: {
												color:
													_this2.data.index === index
														? props.tabBar.selectedColor
														: props.tabBar.color
											}
										},
										item.text
									)
								);
							})
						)
				);
			};
			return TabLayout;
		})(Component)
	);

	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {
				tabLayoutFrames: [
					{
						title: "页面一",
						name: "page1",
						url: "widget://pages/demo/demo.stml"
					},
					{
						title: "页面二",
						name: "page2",
						url: "widget://pages/demo/demo.stml"
					},
					{
						title: "页面三",
						name: "page3",
						url: "widget://pages/demo/demo.stml"
					}
				],

				tabLayoutRightButtons: [
					{
						text: "",
						color: "#000",
						fontSize: 17,
						fontWeight: "normal",
						iconPath: "../../image/more.png",
						scale: 4
					}
				],

				tabLayoutList: [
					{
						text: "主页",
						iconPath: "../../image/tabbar/home.png",
						selectedIconPath: "../../image/tabbar/home_selected.png"
					},
					{
						text: "分类",
						iconPath: "../../image/tabbar/category.png",
						selectedIconPath: "../../image/tabbar/category_selected.png"
					},
					{
						text: "我的",
						iconPath: "../../image/tabbar/user.png",
						selectedIconPath: "../../image/tabbar/user_selected.png"
					}
				],

				tabLayoutLeftButtons: [
					{
						text: "返回",
						color: "#000",
						fontSize: 17,
						fontWeight: "normal",
						iconPath: "../../image/back.png",
						scale: 4
					}
				]
			};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.handleClick = function(e) {
			api.toast({
				msg: this.data.text,
				location: "middle"
			});
		};
		Tpl.prototype.render = function() {
			return apivm.h("tab-layout", {
				title: "标题栏",
				frames: this.data.tabLayoutFrames,
				hideNavigationBar: false,
				hideTabBar: false,
				rightButtons: this.data.tabLayoutRightButtons,
				list: this.data.tabLayoutList,
				leftButtons: this.data.tabLayoutLeftButtons
			});
		};

		return Tpl;
	})(Component);
	Tpl.css = {".page": {height: "100%", backgroundColor: "white"}};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();

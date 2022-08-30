module.exports = {
  usernamual: [
    {
      产品描述: [
        '产品描述/简介',
        '产品描述/基本概念',
        '产品描述/应用场景',
        '产品描述/技术白皮书',
        '产品描述/产品定价',
        '产品描述/爱速搭与amis'
      ],
      组织管理: [
        '组织管理/工作台管理',
        '组织管理/基本信息管理',
        '组织管理/角色管理',
        '组织管理/应用管理',
        '组织管理/组织架构及成员管理'
      ],
      数据模型: [
        {
          外部数据源接入: [
            '数据模型/外部数据源接入/数据源编辑',
            '数据模型/外部数据源接入/外部数据源接入',
            '数据模型/外部数据源接入/外部数据源使用',
            '数据模型/外部数据源接入/外部数据源IP白名单'
          ]
        },
        '数据模型/模型基本设置',
        '数据模型/模型其他设置',
        '数据模型/模型数据管理',
        '数据模型/模型字段配置'
      ],
      页面设计: [
        '页面设计/页面设计简介',
        {
          页面设计器介绍: [
            '页面设计/页面设计器/普通页面设计器',
            '页面设计/页面设计器/小程序页面设计器',
            '页面设计/页面设计器/Markdown页面设计器',
            '页面设计/页面设计器/如何配置页面布局',
            '页面设计/页面设计器/如何配置外观样式',
            '页面设计/页面设计器/如何配置事件交互',
            '页面设计/页面设计器/如何获取数据',
            '页面设计/页面设计器/如何配置组件联动',
            '页面设计/页面设计器/如何定义页面参数',
            '页面设计/页面设计器/如何复用页面内的配置',
          ]
        },
        {
          组件介绍: [
            '页面设计/组件介绍/组件分类',
            '页面设计/组件介绍/通用属性',
            '页面设计/组件介绍/组件属性',
            '页面设计/组件介绍/数据容器',
            {
              自定义组件: [
                '页面设计/组件介绍/自定义组件/如何开发自定义组件',
                '页面设计/组件介绍/自定义组件/Angular组件'
              ]
            }
          ]
        },
        '页面设计/如何创建页面',
        '页面设计/如何管理页面',
        '页面设计/如何对接本地开发',
        '页面设计/如何将页面嵌入外部系统',
        {
          典型场景: [
            '页面设计/典型场景/场景1',
          ]
        }
      ],
      服务编排: [
        '服务编排/什么是服务编排',
        '服务编排/如何开发服务编排',
        '服务编排/如何使用服务编排开发业务的基本逻辑',
        '服务编排/如何使用服务编排开发数据的增删改查',
        '服务编排/变量及输入输出参数配置',
        {
          活动节点配置: [
            '服务编排/活动节点配置/开始节点',
            '服务编排/活动节点配置/新增记录节点',
            '服务编排/活动节点配置/更新记录节点',
            '服务编排/活动节点配置/删除记录节点',
            '服务编排/活动节点配置/http请求节点',
            '服务编排/活动节点配置/API中心节点',
            '服务编排/活动节点配置/连接器节点',
            '服务编排/活动节点配置/调用流程节点',
            '服务编排/活动节点配置/数据源SQL节点',
            '服务编排/活动节点配置/分支节点',
            '服务编排/活动节点配置/循环节点',
            '服务编排/活动节点配置/继续循环节点',
            '服务编排/活动节点配置/跳出循环节点',
            '服务编排/活动节点配置/退出节点',
            '服务编排/活动节点配置/设置变量节点',
            '服务编排/活动节点配置/编码转换节点',
            '服务编排/活动节点配置/日期格式化节点',
            '服务编排/活动节点配置/JS代码节点',
            '服务编排/活动节点配置/发送邮件节点',
            '服务编排/活动节点配置/发送消息节点'
          ]
        },
        '服务编排/如何运行调试服务编排',
        '服务编排/如何管理服务编排',
        '服务编排/如何在服务编排中调用脚本',
        '服务编排/是否可以多人编辑服务编排'
      ],
      API对接: [
        'API对接/基础',
        'API对接/本地开发调试',
        'API对接/API中心',
        'API对接/API编排'
      ],
      BPM流程: [
        'BPM流程/基础',
        'BPM流程/流程设计',
        'BPM流程/流程运行',
        'BPM流程/流程示例'
      ],
      小程序: ['小程序/小程序开发实践', '小程序/发布小程序'],
      应用管理: [
        '应用管理/应用设置',
        '应用管理/应用权限设置'
        // '发布管理'
      ],
      对象存储: ['对象存储/对象存储管理']
    },
    '应用发布'
  ],

  privateImage: [
    '私有部署/私有部署安装',
    '私有部署/更新记录',
    '私有部署/运维及故障处理',
    {
      type: 'category',
      label: '私有部署独有功能',
      collapsed: false,
      items: [
        '私有部署/自定义登录方式',
        '私有部署/接入统计',
        '私有部署/接管发布环境权限',
        '私有部署/邮件API',
        '私有部署/平台间应用同步'
        // '私有部署/自定义后端插件'
      ]
    }
  ],

  tutorial: [
    '快速入门/使用流程',
    '快速入门/创建应用',
    '快速入门/连接数据源',
    '快速入门/创建数据模型',
    '快速入门/页面设计',
    '快速入门/发布应用',
    '快速入门/权限管理'
  ],

  openAPI: ['OpenAPI/介绍', 'OpenAPI/组织', 'OpenAPI/应用', 'OpenAPI/数据模型']
};

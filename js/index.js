var test = angular.module('weixin',['ngAnimate','ngRoute','ngTouch']);
test.controller('indexCtrl',['$scope',function($scope){
    $scope.title = '1';
    $scope.show = false;
}])

var friendslist = [
      {image:'touxiang1',name:'Anny',message:'不忘初心',time:'20:26',liaotian:[
        {xinxi:'好好学习 天天向上',isme:false},
        {xinxi:'......',isme:true},
        {xinxi:'......',isme:false},
        {xinxi:'什么意思',isme:false},
        {xinxi:'你猜',isme:true}
      ]},
      {image:'touxiang2',name:'Butt',message:'方得始终',time:'10:42',liaotian:[
        {xinxi:'你在吗？',isme:false},
        {xinxi:'ok',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang3',name:'Diss',message:'帮我点个赞',time:'11:23',liaotian:[
        {xinxi:'不忘初心 方得始终',isme:false},
        {xinxi:'...',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang4',name:'Elle',message:'亲爱的',time:'11:42',liaotian:[
        {xinxi:'一起吃饭去',isme:false},
        {xinxi:'你请客',isme:true},
        {xinxi:'好的',isme:false}
      ]},
      {image:'touxiang5',name:'Amada',message:'吃饭 走起',time:'12:42',liaotian:[
        {xinxi:'好好学习 天天向上',isme:false},
        {xinxi:'...',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang6',name:'Hbe',message:'在不在',time:'13:26',liaotian:[
        {xinxi:'good good study',isme:false},
        {xinxi:'......',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang7',name:'Jone',message:'唱 K',time:'13:38',liaotian:[
        {xinxi:'好好学习 天天向上',isme:false},
        {xinxi:'...',isme:true},
        {xinxi:'......',isme:false}
      ]},
      {image:'touxiang8',name:'Mary',message:'多喝水',time:'16:25',liaotian:[
        {xinxi:'好好学习 天天向上',isme:false},
        {xinxi:'...',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang9',name:'Tiff',message:'么么哒',time:'18:12',liaotian:[
        {xinxi:'好好学习 天天向上',isme:false},
        {xinxi:'...',isme:true},
        {xinxi:'...',isme:false}
      ]},
      {image:'touxiang10',name:'Jay',message:'今天是个好日子',time:'20:57',liaotian:[
        {xinxi:'day day up',isme:false},
        {xinxi:'......',isme:true},
        {xinxi:'......',isme:false}
      ]},
    ]

test.controller('weixinCtrl',['$scope',function($scope){

    $scope.friendslist = friendslist;
    $scope.deletefriends = function(id){
      $scope.friendslist = $scope.friendslist.filter(function(v,i){
        return i !== id;
      })
    }

}])
test.controller('tongxunluCtrl',['$scope',function($scope){

    $scope.lianxiren = [
      {
        key:'A',
        people:[
            {name:'Amada',touxiang:'touxiang1'},
            {name:'Aoo',touxiang:'touxiang2'},
            {name:'Aei',touxiang:'touxiang3'},
            {name:'Amada',touxiang:'touxiang8'},
            {name:'Aoo',touxiang:'touxiang6'},
            {name:'Aei',touxiang:'touxiang10'},
        ]
      },
      {
        key:'B',
        people:[
            {name:'Ben',touxiang:'touxiang4'},
            {name:'Bobby',touxiang:'touxiang5'},
            {name:'Boy',touxiang:'touxiang6'},
        ]
      },
      {
        key:'C',
        people:[
            {name:'Cen',touxiang:'touxiang7'},
            {name:'Cobby',touxiang:'touxiang8'},
        ]
      },
      {
        key:'D',
        people:[
            {name:'Den',touxiang:'touxiang9'},
            {name:'Dobby',touxiang:'touxiang10'},
        ]
      }
    ];

    $scope.deletefriends = function(id){
        $scope.lianxiren = $scope.lianxiren.filter(function(v,i){
          return i !== id;
        })
    }

}])

test.controller('liaotianCtrl',['$scope','$routeParams',function($scope,$routeParams){
    var id = $routeParams.id;
    $scope.list = friendslist[ id ].liaotian;
    $scope.image = friendslist[ id ].image;
    $scope.ziji = 'ziji';
}])

test.controller('faxianCtrl',['$scope',function($scope){
    
}])
test.controller('meCtrl',['$scope',function($scope){
    
}])

test.directive('uqTitle',[function(){
	return {
		restrict:'E',
		templateUrl:'views/title.html'
	}
}]).directive('uqFooter',[function(){
	return {
		restrict:'E',
		templateUrl:'views/footer.html'
	}
}]).directive('uqZimuList',[function(){
  return {
    restrict:'E',
    templateUrl:'views/zimu-list.html',
    link:function($scope,el){
      if( localStorage.scroll ){
        setTimeout( function(){
          $('#content').scrollTop(localStorage.scroll);
        },0)
      }
      var opp = {};
      $('.zimu').each(function(){
          opp[ $(this).attr('data-key') ] = $(this).position().top
      })
      $('.zimu-list').on('click','li',function(){
        var top = opp[ $.trim( $(this).text() ) ];
        $('#content').scrollTop(top);
        localStorage.scroll = top;
      })
    }
  }
}])


test.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        controller:'weixinCtrl',
        templateUrl:'views/wx.html'
    }).when('/liaotian/:id',{
        controller:'liaotianCtrl',
        templateUrl:'views/liaotian.html'
    }).when('/weixin',{
        controller:'weixinCtrl',
        templateUrl:'views/wx.html'
    }).when('/tongxunlu',{
        controller:'tongxunluCtrl',
        templateUrl:'views/txl.html'
    }).when('/faxian',{
        controller:'faxianCtrl',
        templateUrl:'views/fx.html'
    }).when('/wo',{
        controller:'meCtrl',
        templateUrl:'views/me.html'
    }).otherwise({
        redirectTo:'/'
    })
  }])


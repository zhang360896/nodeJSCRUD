Backbone.Model.extend({
                  idAttribute: "_id",
                  defaults : {
                      name: ""
                    , regDate: ""
                    , role: ""
                    , status: ""
                  },
                  url:"/users",
                  initialize : function(){
                      this.on('change:name', function(){
                           // alert("name changed");
                      });
                  }
          });
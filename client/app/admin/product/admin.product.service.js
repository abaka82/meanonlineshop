/**
 * Module declaration.
 * @type {Object}
 */
angular.module("meanonlineshopApp.adminProductServices")
.factory("adminProduct", function($resource) {
    return $resource("/api/products/", {}, {
    	get   : {method: "GET", params: {productId: "-1"}},
        save  : {method : "POST"}
    });
});
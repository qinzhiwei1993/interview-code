const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

class Car {
	constructor() {
		this.hooks = {
			accelerate: new SyncHook(["newSpeed"]),
			brake: new SyncHook(),
			calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
		};
	}
}


const myCar = new Car();

// 同步调用
// myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
// myCar.hooks.accelerate.call('haha')

myCar.hooks.calculateRoutes.tapAsync("BingMapsPlugin", (source, target, routesList, callback) => {
	console.log(source, target, routesList)
    callback()
});

myCar.hooks.calculateRoutes.callAsync(1,2,3, err => {
    console.log('haahhahfsfs')
})
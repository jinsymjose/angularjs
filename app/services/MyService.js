myAppModule.service('MyService', [
		'$rootScope',
		function($rootScope) {
			this.saveStatus = function(statusData) {

				$rootScope.statusHistory.push({
					date : statusData.date.value,
					project : statusData.project.title,
					activity : statusData.activity.title,
					time : statusData.hour.value + ':'
							+ statusData.minute.value,
					description : statusData.description
				});

				return true;
			};

			this.setDetails = function(statusData,dates) {
				var hour = 0;
				var minute = 0;
				var dateId = 0;
				var inputDate = statusData.date.value.split('-');
				angular.forEach(dates, function(value, index) {
					var historyDate = value.value.split('-');
					if ((inputDate[0] == historyDate[0])
							&& (inputDate[1] == historyDate[1])
							&& (inputDate[2] == historyDate[2])) {
						hour = value.hour + statusData.hour.value;
						minute += value.minute + statusData.minute.value;
						value.hour = hour;
						value.minute - minute;
						dateId = value.id;
						return false;
					}

				});
				var returnflag = {};
				returnflag.date = 0;
				returnflag.hours = 8;
				returnflag.mints = 0;
                                  returnflag.dateId = 0;
				var timeSpendinSec = (hour * 60 + minute);
				if ((timeSpendinSec / 60) >= 8) {
					returnflag.date = 1;
				} else {
					var temp = 480 - timeSpendinSec;
					var hours = temp / 60;
					var integ = Math.floor(hours);
					var fract = temp - integ * 60;
					returnflag.hours = integ;
					returnflag.mints = fract;
					returnflag.dateId = dateId;

				}

				return returnflag;
			};

		} ]);

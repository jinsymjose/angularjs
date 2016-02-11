myAppModule.service('statusService', [
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

			this.setDetails = function(statusData, dates) {
				var totalHours = 0;
				var totalMinutes = 0;
				var dateFieldId = 1;
				var currentStatusDate = statusData.date.value.split('-');
				angular.forEach(dates, function(date, index) {
					var savedStatusDate = date.value.split('-');
					if ((currentStatusDate[0] == savedStatusDate[0])
							&& (currentStatusDate[1] == savedStatusDate[1])
							&& (currentStatusDate[2] == savedStatusDate[2])) {
						totalHours = date.hour + statusData.hour.value;
						totalMinutes = date.minute + statusData.minute.value;
						date.hour = totalHours;
						date.minute = totalMinutes;
						dateFieldId = date.id;
						return false;
					}
				});

				var returnData = {};
				returnData.dateIncrement = 0;
				returnData.hourValue = 8;
				returnData.minuteValue = 0;
				returnData.dateFieldId = dateFieldId;
				var timeSpendinMints = (totalHours * 60 + totalMinutes);
				if ((timeSpendinMints / 60) >= 8) {
					returnData.dateIncrement = 1;
				} else {
					var timeRemains = 480 - timeSpendinMints;
					var hoursSpend = timeRemains / 60;
					var hourRemains = Math.floor(hoursSpend);
					var minutesRemains = timeRemains - hourRemains * 60;
					returnData.hourValue = hourRemains;
					returnData.minuteValue = minutesRemains;
				}
				return returnData;
			};
		} ]);

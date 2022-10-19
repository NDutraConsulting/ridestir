import RentalLogsModel from '../../models/rentals/RentalLogsModel';
//import {removeWhiteSpace} from '../../_functions/utils';
import {smallData} from './rental-logs';

test('Verifies RentalModel Correctness', () => {
  const testMode = true;
  const rentalLogs = new RentalLogsModel(testMode);
  rentalLogs.processFetchedData(smallData);

  const cachedJSON = JSON.stringify(rentalLogs.getCachedData());
  expect(cachedJSON).toMatch(JSON.stringify(smallData));

  expect(JSON.stringify(rentalLogs.getCheckouts())).toMatch(checkoutsExpectation());
});

function checkoutsExpectation() {
  return (`{"143":{"2015-02-01":{"10":{"id":143,"name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","dateTimeObj":{"dateTimeKey":"2015-02-01-10","dateTime":"2015-02-01 10:10:58","time":"10:10:58","date":"2015-02-01","year":"2015","month":"02","day":"01","hour":"10","min":"10"},"logs":[{"tripduration":370,"start_time":"2015-02-01 10:10:58","stop_time":"2015-02-02 00:17:08","start_station_id":143,"start_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","start station latitude":"42.366426","start_station_longitude":"-71.105495","end_station_id":157,"end_station_name":"Binney St / Sixth St","end_station_latitude":"42.366095","end_station_longitude":"-71.086388","bike_id":703,"usertype":"Subscriber","birth year":"1984","gender":1}]},"00":{"id":143,"name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","dateTimeObj":{"dateTimeKey":"2015-02-01-00","dateTime":"2015-02-01 00:10:58","time":"00:10:58","date":"2015-02-01","year":"2015","month":"02","day":"01","hour":"00","min":"10"},"logs":[{"tripduration":370,"start_time":"2015-02-01 00:10:58","stop_time":"2015-02-01 05:17:08","start_station_id":143,"start_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","start station latitude":"42.366426","start_station_longitude":"-71.105495","end_station_id":143,"end_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","end_station_latitude":"42.366095","end_station_longitude":"-71.086388","bike_id":704,"usertype":"Subscriber","birth year":"1985","gender":2},{"tripduration":370,"start_time":"2015-02-01 00:10:58","stop_time":"2015-02-01 09:17:08","start_station_id":143,"start_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","start station latitude":"42.366426","start_station_longitude":"-71.105495","end_station_id":143,"end_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","end_station_latitude":"42.366095","end_station_longitude":"-71.086388","bike_id":703,"usertype":"Subscriber","birth year":"1984","gender":1}]}},"2015-02-02":{"14":{"id":143,"name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","dateTimeObj":{"dateTimeKey":"2015-02-02-14","dateTime":"2015-02-02 14:10:58","time":"14:10:58","date":"2015-02-02","year":"2015","month":"02","day":"02","hour":"14","min":"10"},"logs":[{"tripduration":370,"start_time":"2015-02-02 14:10:58","stop_time":"2015-02-03 00:17:08","start_station_id":143,"start_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","start station latitude":"42.366426","start_station_longitude":"-71.105495","end_station_id":143,"end_station_name":"Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St","end_station_latitude":"42.366095","end_station_longitude":"-71.086388","bike_id":703,"usertype":"Subscriber","birth year":"1984","gender":1}]}}}}`);
}


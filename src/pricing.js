function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("table");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var publicSpreadsheetUrl =
	"https://docs.google.com/spreadsheets/d/1m8xqj8VK394EY_wjYdyOGB-uU6L5f25e7n6cluGDmUM/pubhtml";

function init() {
	Tabletop.init({
		key: publicSpreadsheetUrl,
		callback: writePrice,
		simpleSheet: true
	});
}

function showInfo(data, tabletop) {
	console.table(data);
	let columnNames = Object.keys(data[0]);

	// let columnNames = Object.keys(data[0]);
	// columnNames.forEach( function(columnName){
	// console.log(data[0][columnName]);
	// });

	function trimPlace(jsonLocation, htmlID) {
		var myString = JSON.stringify(jsonLocation);
		if (myString.charAt(0) == '"') {
			b = myString.slice(1, myString.length - 1);
			return (document.getElementById(htmlID).innerHTML = b);
		} else return (document.getElementById(htmlID).innerHTML = myString);
	}

	function justTrim(jsonLoc, htmlID) {
		var imgString = JSON.stringify(jsonLoc);
		if (imgString.charAt(0) == '"') {
			c = imgString.slice(1, imgString.length - 1);
			return (document.getElementById(htmlID).src = c);
		} else return (document.getElementById(htmlID).src = imgString);
	}

	// trimPlace(data[0].marca, "marca")
	// trimPlace(data[0].tipo, "tipo")
	// trimPlace(data[0].nome, "nome")
	// trimPlace(data[0].img, "img")
	// trimPlace(data[0].screen, "screen");
	// trimPlace(data[0].connettore, "connettore")
	// trimPlace(data[0].cameraa, "cameraa")
	// trimPlace(data[0].camerap, "camerap")
	// trimPlace(data[0].vibrazione, "vibrazione")
	// trimPlace(data[0].sim, "sim")
}
// window.addEventListener("DOMContentLoaded", init);

// main logic
function writePrice(data, tabletop) {
  // All column names
	let columnNames = Object.keys(data[0]);
  // Clicked device
	let device = document.getElementsByClassName("fetched");
  // Get clicked device's id to filter data from the sheet
	var deviceId = parseInt(device[0].dataset.id);

	//console.log(deviceId);

  // array: [service name], [service price], [used for data fetching], [used svg icon]
	// let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
	// let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
	let nome = ["Nome", data[deviceId][columnNames[2]], "nome"];
	let mat = ["Materiale", data[deviceId][columnNames[3]], "mat"];

  let vetro = ["Vetro", data[deviceId][columnNames[3]], "vetro", "<svg width='74' height='74' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'><circle opacity='0' r='37' transform='matrix(1 0 0 -1 37 37)' fill='#D6D6D6'/><rect x='22' y='12' width='30' height='50' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><line x1='30.9562' y1='36.8791' x2='40.3938' y2='27.0437' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><line x1='31' y1='47.7195' x2='41.8787' y2='36.8408' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"];

	let screen = ["Touchscreen + LCD", data[deviceId][columnNames[4]], "display", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path d='M40.5494 23.8249C39.076 23.841 37.6675 24.4459 36.6256 25.5099C35.5837 26.574 34.9914 28.0125 34.9757 29.5172V46.4705L33.4005 44.8618C32.366 43.8248 30.9726 43.2466 29.5231 43.2531C28.8038 43.2388 28.0892 43.3741 27.4226 43.6506C26.7561 43.9271 26.1515 44.3392 25.6458 44.8618C24.7614 45.7508 24.1965 46.9186 24.0426 48.1761C23.8887 49.4337 24.1547 50.7075 24.7976 51.7916L26.6151 54.6377L29.5231 60.3177L32.1888 65.7625C32.3659 66.1336 32.6416 66.4464 32.9844 66.6652C33.3272 66.884 33.7233 67 34.1275 67H53.1508C53.6702 67.0024 54.1737 66.8176 54.5727 66.478C54.9717 66.1384 55.2405 65.6659 55.3318 65.1438L58.9668 46.3343C59.0611 45.7794 58.9528 45.2084 58.6625 44.7295C58.3722 44.2506 57.9201 43.897 57.3917 43.7357L46.0019 40.2708V29.6286C46.0295 28.878 45.9092 28.1295 45.648 27.4274C45.3868 26.7252 44.9902 26.0839 44.4816 25.5414C43.973 24.9989 43.3628 24.5663 42.6873 24.2693C42.0118 23.9723 41.2848 23.817 40.5494 23.8125V23.8249ZM40.5494 27.2774C40.8362 27.2758 41.1206 27.3323 41.3859 27.4436C41.6512 27.555 41.8923 27.719 42.0952 27.9262C42.298 28.1333 42.4586 28.3795 42.5676 28.6505C42.6767 28.9215 42.732 29.2119 42.7304 29.5048V42.622L45.1537 43.3644L55.5741 46.5818L52.3026 63.5351H34.903L32.4796 58.709L29.2081 52.5217C28.5242 51.3877 27.9558 50.1852 27.5117 48.933C27.4858 48.5874 27.5378 48.2404 27.6638 47.9186C27.7899 47.5967 27.9866 47.3088 28.2388 47.0768C28.6342 46.6977 29.1508 46.4779 29.6928 46.4581C30.2756 46.4533 30.8385 46.6744 31.2679 47.0768L32.8431 48.6855L34.7818 50.6655C35.0893 50.9847 35.4834 51.2024 35.9133 51.2906C36.3431 51.3788 36.789 51.3334 37.1933 51.1602C37.5976 50.987 37.9419 50.6941 38.1816 50.3191C38.4213 49.9442 38.5454 49.5045 38.538 49.0568V29.5172C38.512 29.2286 38.5465 28.9377 38.6392 28.6637C38.7318 28.3898 38.8805 28.1391 39.0754 27.9284C39.2702 27.7177 39.5068 27.5518 39.7693 27.4417C40.0318 27.3316 40.3142 27.2798 40.5978 27.2898L40.5494 27.2774ZM31.7526 35.457C30.7664 33.6059 30.3844 31.4817 30.6621 29.3935C30.9692 26.8022 32.2331 24.4284 34.1957 22.7564C36.1583 21.0845 38.6718 20.2406 41.223 20.3969C43.7741 20.5533 46.1707 21.698 47.9235 23.5976C49.6763 25.4972 50.6532 28.0084 50.6547 30.6186C50.6597 31.9736 50.413 33.3173 49.9277 34.5784C49.8453 34.8161 49.836 35.0739 49.9009 35.3171C49.9659 35.5604 50.1021 35.7776 50.2912 35.9397L51.1394 36.6821C51.2669 36.7937 51.4179 36.8738 51.5806 36.916C51.7433 36.9582 51.9134 36.9615 52.0776 36.9255C52.2418 36.8896 52.3956 36.8154 52.5271 36.7088C52.6586 36.6022 52.7642 36.466 52.8358 36.3109C53.6203 34.5193 54.0329 32.5811 54.0474 30.6186C53.9543 27.0933 52.5626 23.7336 50.1503 21.2104C47.738 18.6871 44.4826 17.1859 41.034 17.0065C39.2459 16.9503 37.4649 17.2603 35.7959 17.9183C34.127 18.5762 32.604 19.5688 31.3166 20.8374C30.0292 22.106 29.0036 23.6251 28.3002 25.305C27.5968 26.9848 27.2298 28.7915 27.2209 30.6186C27.2065 32.9589 27.7912 35.2625 28.9173 37.3009C29.0016 37.4448 29.1163 37.5677 29.253 37.6606C29.3898 37.7535 29.5451 37.814 29.7077 37.8377C29.8703 37.8614 30.036 37.8477 30.1927 37.7977C30.3494 37.7476 30.4933 37.6624 30.6136 37.5484L31.4618 36.8059C31.6447 36.6389 31.7679 36.4143 31.8118 36.1678C31.8557 35.9212 31.8178 35.6668 31.7041 35.4447' fill='#2E3133'/></svg>"];
	let screenN = ["Display non Originale", data[deviceId][columnNames[5]], "display", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path d='M40.5494 23.8249C39.076 23.841 37.6675 24.4459 36.6256 25.5099C35.5837 26.574 34.9914 28.0125 34.9757 29.5172V46.4705L33.4005 44.8618C32.366 43.8248 30.9726 43.2466 29.5231 43.2531C28.8038 43.2388 28.0892 43.3741 27.4226 43.6506C26.7561 43.9271 26.1515 44.3392 25.6458 44.8618C24.7614 45.7508 24.1965 46.9186 24.0426 48.1761C23.8887 49.4337 24.1547 50.7075 24.7976 51.7916L26.6151 54.6377L29.5231 60.3177L32.1888 65.7625C32.3659 66.1336 32.6416 66.4464 32.9844 66.6652C33.3272 66.884 33.7233 67 34.1275 67H53.1508C53.6702 67.0024 54.1737 66.8176 54.5727 66.478C54.9717 66.1384 55.2405 65.6659 55.3318 65.1438L58.9668 46.3343C59.0611 45.7794 58.9528 45.2084 58.6625 44.7295C58.3722 44.2506 57.9201 43.897 57.3917 43.7357L46.0019 40.2708V29.6286C46.0295 28.878 45.9092 28.1295 45.648 27.4274C45.3868 26.7252 44.9902 26.0839 44.4816 25.5414C43.973 24.9989 43.3628 24.5663 42.6873 24.2693C42.0118 23.9723 41.2848 23.817 40.5494 23.8125V23.8249ZM40.5494 27.2774C40.8362 27.2758 41.1206 27.3323 41.3859 27.4436C41.6512 27.555 41.8923 27.719 42.0952 27.9262C42.298 28.1333 42.4586 28.3795 42.5676 28.6505C42.6767 28.9215 42.732 29.2119 42.7304 29.5048V42.622L45.1537 43.3644L55.5741 46.5818L52.3026 63.5351H34.903L32.4796 58.709L29.2081 52.5217C28.5242 51.3877 27.9558 50.1852 27.5117 48.933C27.4858 48.5874 27.5378 48.2404 27.6638 47.9186C27.7899 47.5967 27.9866 47.3088 28.2388 47.0768C28.6342 46.6977 29.1508 46.4779 29.6928 46.4581C30.2756 46.4533 30.8385 46.6744 31.2679 47.0768L32.8431 48.6855L34.7818 50.6655C35.0893 50.9847 35.4834 51.2024 35.9133 51.2906C36.3431 51.3788 36.789 51.3334 37.1933 51.1602C37.5976 50.987 37.9419 50.6941 38.1816 50.3191C38.4213 49.9442 38.5454 49.5045 38.538 49.0568V29.5172C38.512 29.2286 38.5465 28.9377 38.6392 28.6637C38.7318 28.3898 38.8805 28.1391 39.0754 27.9284C39.2702 27.7177 39.5068 27.5518 39.7693 27.4417C40.0318 27.3316 40.3142 27.2798 40.5978 27.2898L40.5494 27.2774ZM31.7526 35.457C30.7664 33.6059 30.3844 31.4817 30.6621 29.3935C30.9692 26.8022 32.2331 24.4284 34.1957 22.7564C36.1583 21.0845 38.6718 20.2406 41.223 20.3969C43.7741 20.5533 46.1707 21.698 47.9235 23.5976C49.6763 25.4972 50.6532 28.0084 50.6547 30.6186C50.6597 31.9736 50.413 33.3173 49.9277 34.5784C49.8453 34.8161 49.836 35.0739 49.9009 35.3171C49.9659 35.5604 50.1021 35.7776 50.2912 35.9397L51.1394 36.6821C51.2669 36.7937 51.4179 36.8738 51.5806 36.916C51.7433 36.9582 51.9134 36.9615 52.0776 36.9255C52.2418 36.8896 52.3956 36.8154 52.5271 36.7088C52.6586 36.6022 52.7642 36.466 52.8358 36.3109C53.6203 34.5193 54.0329 32.5811 54.0474 30.6186C53.9543 27.0933 52.5626 23.7336 50.1503 21.2104C47.738 18.6871 44.4826 17.1859 41.034 17.0065C39.2459 16.9503 37.4649 17.2603 35.7959 17.9183C34.127 18.5762 32.604 19.5688 31.3166 20.8374C30.0292 22.106 29.0036 23.6251 28.3002 25.305C27.5968 26.9848 27.2298 28.7915 27.2209 30.6186C27.2065 32.9589 27.7912 35.2625 28.9173 37.3009C29.0016 37.4448 29.1163 37.5677 29.253 37.6606C29.3898 37.7535 29.5451 37.814 29.7077 37.8377C29.8703 37.8614 30.036 37.8477 30.1927 37.7977C30.3494 37.7476 30.4933 37.6624 30.6136 37.5484L31.4618 36.8059C31.6447 36.6389 31.7679 36.4143 31.8118 36.1678C31.8557 35.9212 31.8178 35.6668 31.7041 35.4447' fill='#2E3133'/></svg>"];
	let batteria = [
		"Batteria",
		data[deviceId][columnNames[6]],
		"batteria", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path d='M39.6275 58.3266C39.4918 58.3266 39.356 58.3011 39.225 58.2526C38.7011 58.0486 38.3772 57.4848 38.4462 56.8929L39.4704 48.1226L36.0455 48.1175C35.5978 48.1175 35.1905 47.8496 34.9881 47.4261C34.7856 47.0001 34.819 46.4899 35.0786 46.0996L43.5954 33.3471C43.9193 32.8675 44.51 32.6889 45.0196 32.9109C45.5317 33.1379 45.8294 33.7119 45.7413 34.2961L44.6005 41.745L47.9539 41.7501C48.3897 41.7501 48.7874 42.0052 48.997 42.4134C49.2042 42.8216 49.1899 43.3165 48.9565 43.7093L40.6302 57.7373C40.4087 58.1123 40.0253 58.3266 39.6275 58.3266V58.3266ZM38.3581 45.5715L40.8208 45.5741C41.1613 45.5741 41.4852 45.7323 41.7115 46.0052C41.9378 46.2782 42.0426 46.643 41.9997 47.0078L41.4662 51.5741L45.7865 44.296L43.1977 44.2935C42.8499 44.2935 42.5165 44.1277 42.2926 43.8445C42.0664 43.5588 41.9687 43.1813 42.0259 42.8139L42.5665 39.2782L38.3581 45.5715Z' fill='#2E3133'/><rect x='26.6938' y='24.1428' width='30.6122' height='42.8571' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><rect width='18.3673' height='7.14286' rx='2' transform='matrix(1 0 0 -1 32.8164 24.1428)' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"
	];
  let connettore = [
		"Connettore USB",
		data[deviceId][columnNames[7]],
		"connettore", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path fill-rule='evenodd' clip-rule='evenodd' d='M29.6464 47.2015H23.3625V24.4687H39.7376V47.2015H33.0471V60.3236C33.0471 63.3546 35.5237 65.7943 38.5178 65.7943C41.5119 65.7943 43.9884 63.3177 43.9884 60.3236V46.9057C43.9884 46.8308 43.9931 46.7573 44.0023 46.6854V33.8204C44.0023 28.9246 47.9778 24.949 52.8736 24.949C57.7694 24.949 61.745 28.9246 61.745 33.8204V47.1826C61.6713 48.1397 60.9351 48.9127 59.9781 48.9127C59.021 48.9127 58.2848 48.1397 58.2848 47.2194V33.8204C58.2848 30.8019 55.8185 28.3724 52.8368 28.3724C49.8551 28.3724 47.3888 30.8387 47.3888 33.8204V46.8755C47.389 46.8855 47.3891 46.8956 47.3891 46.9057V60.3236C47.463 65.2398 43.4709 69.2319 38.5547 69.2319C33.6385 69.2319 29.6464 65.2398 29.6464 60.3236V47.2015ZM26.8002 43.7639H36.3369V27.9063H26.8002V43.7639ZM24.0279 18H39.1461V21.4376H24.0279V18Z' fill='#2E3133'/></svg>"
	];
	let cameraAnteriore = [
		"Camera Anteriore",
		data[deviceId][columnNames[8]],
		"cameraAnteriore", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><circle cx='42' cy='36' r='6' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><path d='M57 63C57 54.1634 50.2843 47 42 47C33.7157 47 27 54.1634 27 63' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><rect x='27' y='17' width='30' height='50' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><rect x='36' y='17' width='12' height='2' rx='1' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"
	];
	let cameraPosteriore = [
		"Camera Posteriore",
		data[deviceId][columnNames[9]],
		"cameraPosteriore",
    "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><rect x='27' y='17' width='30' height='50' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><rect x='32' y='22' width='8' height='8' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><circle cx='45' cy='23' r='2' fill='#2E3133'/></svg>"
	];
	let tastoHome = ["Tasto Home", data[deviceId][columnNames[10]], "tasto-home", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><rect x='27' y='17' width='30' height='50' rx='2' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><rect x='38' y='54' width='8' height='8' rx='2' fill='#2E3133'/><rect x='36' y='17' width='12' height='2' rx='1' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"];
  let altoparlante = ["Altoparlante", data[deviceId][columnNames[11]], "altoparlante", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path d='M39.5503 29.0657C39.0417 28.772 38.415 28.772 37.9063 29.0657L26.7829 35.4199H20.6441C19.7361 35.4199 19 36.156 19 37.0639V46.9281C19 47.8361 19.7361 48.5722 20.6441 48.5722H26.7829L37.9129 54.9313C38.7014 55.3816 39.7055 55.1076 40.1559 54.3192C40.2977 54.0709 40.3722 53.7901 40.3723 53.5042V30.4879C40.3717 29.9011 40.0585 29.3592 39.5503 29.0657ZM37.0843 50.6699L28.0421 45.5011C27.7918 45.3579 27.5083 45.2831 27.2201 45.284H22.288V38.7079H27.2201C27.5084 38.7088 27.7919 38.634 28.0421 38.4908L37.0843 33.322V50.6699Z' fill='#2E3133'/><path d='M46.5293 46.411C49.0307 43.9096 49.0307 39.854 46.5293 37.3525' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><path d='M51.7056 51.5872C57.0658 46.227 57.0658 37.5365 51.7056 32.1763' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><path d='M56.8818 56.7635C65.1008 48.5445 65.1008 35.219 56.8818 27' stroke='#2E3133' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>"];

  let microfono = ["Microfono", data[deviceId][columnNames[12]], "microfono", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><path d='M41.8242 52.0195H43.0898C49.1962 52.0195 54.1641 47.0516 54.1641 40.9453V26.1797C54.1641 20.0151 49.1962 15 43.0898 15H41.8242C35.7246 15 30.761 20.0043 30.75 26.1594V40.9453C30.75 47.0516 35.7179 52.0195 41.8242 52.0195ZM41.8242 18.1641H43.0898C47.1344 18.1641 50.4776 21.2566 50.9426 25.2305H48.3633C47.4896 25.2305 46.7812 25.9388 46.7812 26.8125C46.7812 27.6862 47.4896 28.3945 48.3633 28.3945H51V31.9805H46.6758C45.8021 31.9805 45.0938 32.6888 45.0938 33.5625C45.0938 34.4362 45.8021 35.1445 46.6758 35.1445H51V38.7305H48.3633C47.4896 38.7305 46.7812 39.4388 46.7812 40.3125C46.7812 41.1862 47.4896 41.8945 48.3633 41.8945H50.941C50.4703 45.8101 47.1301 48.8555 43.0898 48.8555H41.8242C37.784 48.8555 34.4437 45.8101 33.973 41.8945H36.5508C37.4245 41.8945 38.1328 41.1862 38.1328 40.3125C38.1328 39.4388 37.4245 38.7305 36.5508 38.7305H33.9141V35.1445H38.2383C39.112 35.1445 39.8203 34.4362 39.8203 33.5625C39.8203 32.6888 39.112 31.9805 38.2383 31.9805H33.9141V28.3945H36.5508C37.4245 28.3945 38.1328 27.6862 38.1328 26.8125C38.1328 25.9388 37.4245 25.2305 36.5508 25.2305H33.9714C34.4364 21.2566 37.7797 18.1641 41.8242 18.1641Z' fill='#2E3133'/><path d='M60.9141 40.3125C60.9141 39.4388 60.2057 38.7305 59.332 38.7305C58.4583 38.7305 57.75 39.4388 57.75 40.3125C57.75 48.745 50.8896 55.6055 42.457 55.6055C34.0245 55.6055 27.1641 48.745 27.1641 40.3125C27.1641 39.4388 26.4557 38.7305 25.582 38.7305C24.7083 38.7305 24 39.4388 24 40.3125C24 49.9568 31.4357 57.8958 40.875 58.701V65.8359H32.332C31.4583 65.8359 30.75 66.5443 30.75 67.418C30.75 68.2917 31.4583 69 32.332 69H52.582C53.4557 69 54.1641 68.2917 54.1641 67.418C54.1641 66.5443 53.4557 65.8359 52.582 65.8359H44.0391V58.701C53.4784 57.8958 60.9141 49.9568 60.9141 40.3125V40.3125Z' fill='#2E3133'/></svg>"];

  let tastiLaterali = ["Tasti Laterali", data[deviceId][columnNames[13]], "tasti-laterali", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='white'/><line x1='37.5' y1='29.5' x2='47.5' y2='29.5' stroke='#2E3133' stroke-width='3' stroke-linecap='round'/><line x1='37.5' y1='55.5' x2='47.5' y2='55.5' stroke='#2E3133' stroke-width='3' stroke-linecap='round'/><line x1='42.5' y1='24.5' x2='42.5' y2='34.5' stroke='#2E3133' stroke-width='3' stroke-linecap='round'/><rect x='30.5' y='16.5' width='24' height='51' rx='12' stroke='#2E3133' stroke-width='3'/></svg>"];
  
  let guscioPosteriore = ["Guscio Posteriore", data[deviceId][columnNames[14]], "guscio-posteriore", "<svg viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M24 55.5625V28H29.5774L37.969 36.2788H32.3746V47.3005H51.9379V45.9207H33.7732L42.1477 37.6587H60.3125V55.5625H24ZM39.3676 36.2788L30.976 28H36.5704L44.9449 36.2788H39.3676ZM49.1407 36.2788L40.7662 28H44.9449L53.3365 36.2788H49.1407ZM58.931 36.2788L50.5393 28H51.9379L60.3125 36.2788H58.931Z' fill='#2E3133'/></svg>"];
  
  let vetroPosteriore = ["Vetro Posteriore", data[deviceId][columnNames[15]], "vetro-posteriore", "<svg viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M24 55.5625V28H29.5774L37.969 36.2788H32.3746V47.3005H51.9379V45.9207H33.7732L42.1477 37.6587H60.3125V55.5625H24ZM39.3676 36.2788L30.976 28H36.5704L44.9449 36.2788H39.3676ZM49.1407 36.2788L40.7662 28H44.9449L53.3365 36.2788H49.1407ZM58.931 36.2788L50.5393 28H51.9379L60.3125 36.2788H58.931Z' fill='#2E3133'/></svg>"];

	let sim = ["Scheda Madre", data[deviceId][columnNames[16]], "sim", "<svg viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M66.4766 39.4609C67.3179 39.4609 68 38.7788 68 37.9375C68 37.0962 67.3179 36.4141 66.4766 36.4141H59.7734V31.3359H66.4766C67.3179 31.3359 68 30.6538 68 29.8125C68 28.9712 67.3179 28.2891 66.4766 28.2891H59.7734V27.2734C59.7734 25.5934 58.4066 24.2266 56.7266 24.2266H55.7109V17.5234C55.7109 16.6821 55.0288 16 54.1875 16C53.3462 16 52.6641 16.6821 52.6641 17.5234V24.2266H47.5859V17.5234C47.5859 16.6821 46.9038 16 46.0625 16C45.2212 16 44.5391 16.6821 44.5391 17.5234V24.2266H39.4609V17.5234C39.4609 16.6821 38.7788 16 37.9375 16C37.0962 16 36.4141 16.6821 36.4141 17.5234V24.2266H31.3359V17.5234C31.3359 16.6821 30.6538 16 29.8125 16C28.9712 16 28.2891 16.6821 28.2891 17.5234V24.2266H27.2734C25.5934 24.2266 24.2266 25.5934 24.2266 27.2734V28.2891H17.5234C16.6821 28.2891 16 28.9712 16 29.8125C16 30.6538 16.6821 31.3359 17.5234 31.3359H24.2266V36.4141H17.5234C16.6821 36.4141 16 37.0962 16 37.9375C16 38.7788 16.6821 39.4609 17.5234 39.4609H24.2266V44.5391H17.5234C16.6821 44.5391 16 45.2212 16 46.0625C16 46.9038 16.6821 47.5859 17.5234 47.5859H24.2266V52.6641H17.5234C16.6821 52.6641 16 53.3462 16 54.1875C16 55.0288 16.6821 55.7109 17.5234 55.7109H24.2266V56.7266C24.2266 58.4066 25.5934 59.7734 27.2734 59.7734H28.2891V66.4766C28.2891 67.3179 28.9712 68 29.8125 68C30.6538 68 31.3359 67.3179 31.3359 66.4766V59.7734H36.4141V66.4766C36.4141 67.3179 37.0962 68 37.9375 68C38.7788 68 39.4609 67.3179 39.4609 66.4766V59.7734H44.5391V66.4766C44.5391 67.3179 45.2212 68 46.0625 68C46.9038 68 47.5859 67.3179 47.5859 66.4766V59.7734H52.6641V66.4766C52.6641 67.3179 53.3462 68 54.1875 68C55.0288 68 55.7109 67.3179 55.7109 66.4766V59.7734H56.7266C58.4066 59.7734 59.7734 58.4066 59.7734 56.7266V55.7109H66.4766C67.3179 55.7109 68 55.0288 68 54.1875C68 53.3462 67.3179 52.6641 66.4766 52.6641H59.7734V47.5859H66.4766C67.3179 47.5859 68 46.9038 68 46.0625C68 45.2212 67.3179 44.5391 66.4766 44.5391H59.7734V39.4609H66.4766ZM56.7266 56.7266H27.2734V27.2734H56.7266C56.7286 57.5451 56.7367 56.7266 56.7266 56.7266Z' fill='#2E3133'/><path d='M48.1553 32.7978C47.8696 32.5121 47.4821 32.3516 47.0781 32.3516H36.9219C36.5179 32.3516 36.1304 32.5121 35.8447 32.7978L32.7978 35.8447C32.5121 36.1304 32.3516 36.5179 32.3516 36.9219V47.0781C32.3516 47.4821 32.5121 47.8696 32.7978 48.1553L35.8447 51.2022C36.1304 51.4879 36.5179 51.6484 36.9219 51.6484H47.0781C47.4821 51.6484 47.8696 51.4879 48.1553 51.2022L51.2022 48.1553C51.4879 47.8696 51.6484 47.4821 51.6484 47.0781V36.9219C51.6484 36.5179 51.4879 36.1304 51.2022 35.8447L48.1553 32.7978ZM48.6016 46.4471L46.4471 48.6016H37.553L35.3984 46.4471V37.553L37.5529 35.3984H46.447L48.6016 37.5529V46.4471Z' fill='#2E3133'/></svg>"];
  let vibrazione = ["Vibrazione", data[deviceId][columnNames[17]], "vibrazione", "<svg viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M66.8806 33.296L51.0304 17.1357C50.3107 16.4081 49.3531 16 48.3316 16C47.3101 16 46.3525 16.4022 45.6328 17.1357L17.1187 46.197C15.6271 47.7172 15.6271 50.1838 17.1187 51.704L32.9747 67.8643C33.6886 68.5919 34.652 69 35.6735 69C36.695 69 37.6526 68.5978 38.3723 67.8643L66.8864 38.803C68.3722 37.2828 68.3722 34.8103 66.8806 33.296V33.296ZM35.6735 64.2738L20.6358 48.9475L48.3316 20.7203L63.3635 36.0525L35.6735 64.2738ZM21.1523 34.3193C21.3323 34.5027 21.6224 34.5027 21.8024 34.3193L33.973 21.9152C34.1529 21.7318 34.1529 21.436 33.973 21.2527L31.7443 18.9813C31.5644 18.7979 31.2742 18.7979 31.0943 18.9813L18.9179 31.3735C18.7379 31.5569 18.7379 31.8527 18.9179 32.036L21.1523 34.3193ZM62.8585 50.6807C62.6786 50.4973 62.3884 50.4973 62.2085 50.6807L50.0263 63.0907C49.8464 63.2741 49.8464 63.5699 50.0263 63.7532L52.255 66.0247C52.4349 66.208 52.7251 66.208 52.905 66.0247L65.0814 53.6205C65.2613 53.4372 65.2613 53.1414 65.0814 52.958L62.8585 50.6807Z' fill='#2E3133'/></svg>"];    
	
  let displayConSim = ["Display (versione Cellular)", data[deviceId][columnNames[20]], "display-con-sim", "<svg width='74' height='74' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'><circle opacity='0' r='37' transform='matrix(1 0 0 -1 37 37)' fill='#D6D6D6'/><path d='M50.7403 34.9399V28.6437V26.5407C50.737 25.5827 50.4757 24.6431 49.9837 23.8207C49.4794 22.9518 48.5842 22.2214 48.042 21.3903C47.2824 20.2329 46.724 18.9557 46.3903 17.6125C46.0498 16.1644 46.1633 14.6659 45.8607 13.2051C45.7585 12.7157 45.4935 12.2752 45.109 11.9552C44.7245 11.6352 44.2429 11.4544 43.7424 11.4422C41.4618 11.1699 39.1675 11.0269 36.8707 11.014C34.3833 10.9457 31.8953 11.1271 29.4442 11.5555C29.1015 11.6436 28.7897 11.8241 28.5428 12.0773C28.296 12.3305 28.1236 12.6466 28.0446 12.9911C27.9059 13.6711 27.7924 15.3459 27.6663 16.3029C27.5177 18.3773 26.684 20.3437 25.2959 21.894L24.7159 22.5362C24.1775 23.0561 23.7485 23.6781 23.454 24.3657C23.1596 25.0533 23.0056 25.7928 23.0011 26.5407V48.3762C22.9854 49.1344 23.1339 49.8869 23.4364 50.5824C23.7388 51.2779 24.1882 51.8999 24.7537 52.4059C25.5618 53.029 26.2312 53.8131 26.7196 54.7084C27.208 55.6037 27.5046 56.5907 27.5907 57.6066C27.8177 59.0674 27.5907 60.5533 27.9437 61.9636C28.0564 62.321 28.2654 62.6405 28.5479 62.8871C28.8303 63.1337 29.1753 63.2978 29.545 63.3614C31.962 63.791 34.4167 63.9725 36.8707 63.9029C39.3414 63.9719 41.8127 63.7904 44.2468 63.3614C44.5987 63.2816 44.9212 63.1047 45.1775 62.8509C45.4339 62.5972 45.6138 62.2767 45.6968 61.9259C45.8355 61.2459 45.5077 57.934 46.6929 55.9318C47.109 55.2266 48.8868 52.5696 48.8868 52.5696C48.8868 52.5696 49.0759 52.2925 49.1263 52.2422C50.1357 51.2045 50.7126 49.8226 50.7403 48.3762V34.9399ZM48.4794 47.3762C48.5211 48.4298 48.1489 49.458 47.4422 50.2414C46.7355 51.0248 45.7503 51.5014 44.6968 51.5696H29.0446C27.991 51.5014 27.0058 51.0248 26.2992 50.2414C25.5925 49.458 25.2203 48.4298 25.262 47.3762V27.5407C25.2203 26.4871 25.5925 25.4589 26.2992 24.6755C27.0058 23.8921 27.991 23.4155 29.0446 23.3474H44.6968C45.7503 23.4155 46.7355 23.8921 47.4422 24.6755C48.1489 25.4589 48.5211 26.4871 48.4794 27.5407V47.3762Z' fill='#2E3133'/></svg>"];


  // include all declared arrays into one
	let allServices = [
    vetro,
		screen,
		screenN,
    batteria,
    connettore,
    cameraAnteriore,
    cameraPosteriore,
    tastoHome,
    altoparlante,
    microfono,
    tastiLaterali,
    guscioPosteriore,
    vetroPosteriore,
    sim,
    vibrazione,
    displayConSim,  
    
	];

	// clean html before fetching
  
	document.getElementById("services").innerHTML = "";
  
	document.getElementById("fetched-device").innerHTML = nome[1];
	document.getElementById("fetched-device").classList.remove("placeholder");
	
	
	allServices.forEach(function (service) {
		// if service is present
    if (service[1]) {
			//console.log(service);
      // create container for each service
			let container = document.createElement("div");
      // assign service id to the container
			container.id = service[2];
			container.classList.add("service")
			// append each service to the parent
			document.getElementById("services").appendChild(container);
      // assign icon, name, price to each service
			document.getElementById(service[2]).innerHTML =
				`<div class="service--img">` + service[3] +
				`</div>
            <span class="service--title">` +
				service[0] +
				`</span>
            <span class="service--price">€ ` +
				service[1] +
				`</span>`;
		} else {
			console.log(service[0] + " is not available for this device");
		}

  	// let forScroll = document.createElement("div");
    //   // assign service id to the container
		// 	forScroll.classList.add("for-scroll")
		// 	// append each service to the parent
		// 	document.getElementById("services").appendChild(forScroll);
	});
}

document.querySelectorAll(".device-container").forEach((device) => {
	device.addEventListener("click", (event) => {
		var deviceId = parseInt(device.dataset.id);
// 		var deviceName = this.innerHTML;
		
// 		document.getElementById("fetched-device").innerHTML = deviceName;

		// console.log(deviceId);

		// assigning placeholder
    document.getElementById("fetched-device").innerHTML = "";
    document.getElementById("fetched-device").classList.add("placeholder");
		document.getElementById("services").innerHTML = "<div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div>"
		document.getElementById("pricing").classList.add("show");
		document.getElementById("block").classList.add("show");

		document.querySelectorAll(".device-container").forEach((device) => {
			device.classList.remove("fetched");
		});

		document.getElementById(deviceId).classList.add("fetched");

		init();
	});
});

document.querySelector("#block, .dragger").addEventListener("click", (event) => {
	document.getElementById('pricing').classList.remove("show");
	document.getElementById('block').classList.remove("show");
});
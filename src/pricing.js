function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
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
	let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
	let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
	let nome = ["Nome", data[deviceId][columnNames[2]], "nome"];
	let mat = ["Materiale", data[deviceId][columnNames[3]], "mat"];

	let screen = ["Touchscreen + LCD", data[deviceId][columnNames[4]], "screen", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M40.3321 20.1899C38.522 20.2092 36.7915 20.9351 35.5114 22.2119C34.2314 23.4888 33.5037 25.215 33.4844 27.0207V47.3646L31.5492 45.4341C30.2783 44.1897 28.5664 43.496 26.7856 43.5037C25.9018 43.4866 25.0238 43.6489 24.2049 43.9807C23.386 44.3126 22.6433 44.8071 22.0219 45.4341C20.9354 46.501 20.2414 47.9023 20.0523 49.4114C19.8632 50.9205 20.19 52.4491 20.9799 53.7499L23.2128 57.1653L26.7856 63.9812L30.0605 70.515C30.2782 70.9603 30.6168 71.3356 31.038 71.5982C31.4591 71.8608 31.9457 72 32.4423 72H55.8138C56.4519 72.0029 57.0705 71.7811 57.5607 71.3736C58.0509 70.9661 58.3812 70.3991 58.4934 69.7725L62.9593 47.2012C63.0751 46.5353 62.942 45.8501 62.5854 45.2754C62.2288 44.7007 61.6732 44.2764 61.024 44.0828L47.0309 39.9249V27.1543C47.0648 26.2537 46.917 25.3554 46.5961 24.5128C46.2752 23.6703 45.7879 22.9007 45.1631 22.2497C44.5382 21.5986 43.7886 21.0795 42.9587 20.7231C42.1288 20.3668 41.2356 20.1804 40.3321 20.175V20.1899ZM40.3321 24.3329C40.6845 24.3309 41.0338 24.3987 41.3598 24.5324C41.6858 24.666 41.982 24.8628 42.2312 25.1114C42.4804 25.36 42.6777 25.6554 42.8117 25.9806C42.9456 26.3058 43.0136 26.6543 43.0116 27.0058V42.7463L45.9889 43.6373L58.7911 47.4982L54.7718 67.8421H33.3951L30.4178 62.0508L26.3985 54.626C25.5583 53.2652 24.86 51.8223 24.3144 50.3196C24.2825 49.9049 24.3464 49.4884 24.5013 49.1023C24.6561 48.7161 24.8978 48.3705 25.2076 48.0922C25.6934 47.6373 26.3281 47.3735 26.994 47.3497C27.71 47.3439 28.4016 47.6093 28.9292 48.0922L30.8644 50.0226L33.2462 52.3986C33.624 52.7816 34.1082 53.0429 34.6363 53.1487C35.1644 53.2545 35.7122 53.2 36.2089 52.9922C36.7057 52.7844 37.1286 52.4329 37.4231 51.9829C37.7175 51.533 37.8701 51.0054 37.861 50.4681V27.0207C37.8291 26.6743 37.8714 26.3252 37.9853 25.9965C38.0991 25.6678 38.2818 25.367 38.5212 25.1141C38.7606 24.8613 39.0512 24.6622 39.3737 24.53C39.6962 24.3979 40.0432 24.3358 40.3916 24.3477L40.3321 24.3329ZM29.5246 34.1485C28.313 31.9271 27.8437 29.378 28.1849 26.8722C28.5622 23.7627 30.1149 20.914 32.5262 18.9077C34.9374 16.9014 38.0253 15.8887 41.1596 16.0763C44.2939 16.2639 47.2383 17.6377 49.3918 19.9172C51.5452 22.1967 52.7454 25.2101 52.7473 28.3423C52.7534 29.9683 52.4503 31.5808 51.8541 33.0941C51.7528 33.3794 51.7413 33.6886 51.8211 33.9806C51.9009 34.2725 52.0683 34.5331 52.3007 34.7276L53.3427 35.6186C53.4993 35.7525 53.6848 35.8485 53.8848 35.8992C54.0847 35.9498 54.2936 35.9538 54.4953 35.9106C54.697 35.8675 54.886 35.7785 55.0476 35.6506C55.2092 35.5227 55.3389 35.3592 55.4268 35.1731C56.3907 33.0232 56.8975 30.6973 56.9154 28.3423C56.801 24.112 55.0912 20.0804 52.1276 17.0524C49.1639 14.0245 45.1644 12.2231 40.9275 12.0078C38.7307 11.9403 36.5426 12.3124 34.4922 13.1019C32.4418 13.8914 30.5706 15.0825 28.9889 16.6049C27.4073 18.1272 26.1472 19.9501 25.2831 21.9659C24.4189 23.9818 23.968 26.1499 23.9572 28.3423C23.9394 31.1507 24.6578 33.915 26.0412 36.361C26.1448 36.5338 26.2857 36.6813 26.4537 36.7927C26.6217 36.9042 26.8126 36.9768 27.0123 37.0052C27.212 37.0337 27.4156 37.0173 27.6082 36.9572C27.8007 36.8972 27.9774 36.7949 28.1253 36.658L29.1674 35.7671C29.3921 35.5666 29.5434 35.2972 29.5974 35.0013C29.6513 34.7055 29.6047 34.4001 29.4651 34.1336' fill='#2E3133'/></svg>"];
	let connettore = [
		"Connettore USB",
		data[deviceId][columnNames[5]],
		"connettore", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path fill-rule='evenodd' clip-rule='evenodd' d='M27.8879 46.2H20.748V20.37H39.354V46.2H31.7519V61.1099C31.7519 64.5539 34.5659 67.3259 37.9679 67.3259C41.3699 67.3259 44.1839 64.5119 44.1839 61.1099V45.8639C44.1839 45.778 44.1894 45.6937 44.2 45.6113V30.996C44.2 25.4332 48.7171 20.916 54.28 20.916C59.8428 20.916 64.36 25.4332 64.36 30.996V46.1788C64.2763 47.2662 63.4398 48.1446 62.3523 48.1446C61.2648 48.1446 60.4283 47.2662 60.4283 46.2206V30.996C60.4283 27.5663 57.626 24.8058 54.2381 24.8058C50.8502 24.8058 48.0479 27.6081 48.0479 30.996V45.855C48.0479 45.858 48.0479 45.8609 48.0479 45.8639V61.1099C48.1319 66.6959 43.5959 71.2319 38.0099 71.2319C32.4239 71.2319 27.8879 66.6959 27.8879 61.1099V46.2ZM24.654 42.294H35.4901V24.276H24.654V42.294ZM21.504 13.02H38.6821V16.926H21.504V13.02Z' fill='#2E3133'/></svg>"
	];
	let cameraAnteriore = [
		"Camera Anteriore",
		data[deviceId][columnNames[6]],
		"cameraAnteriore", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M24 55.5625V28H29.5774L37.969 36.2788H32.3746V47.3005H51.9379V45.9207H33.7732L42.1477 37.6587H60.3125V55.5625H24ZM39.3676 36.2788L30.976 28H36.5704L44.9449 36.2788H39.3676ZM49.1407 36.2788L40.7662 28H44.9449L53.3365 36.2788H49.1407ZM58.931 36.2788L50.5393 28H51.9379L60.3125 36.2788H58.931Z' fill='#2E3133'/></svg>"
	];
	let cameraPosteriore = [
		"Camera Posteriore",
		data[deviceId][columnNames[7]],
		"cameraPosteriore",
    "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M24 55.5625V28H29.5774L37.969 36.2788H32.3746V47.3005H51.9379V45.9207H33.7732L42.1477 37.6587H60.3125V55.5625H24ZM39.3676 36.2788L30.976 28H36.5704L44.9449 36.2788H39.3676ZM49.1407 36.2788L40.7662 28H44.9449L53.3365 36.2788H49.1407ZM58.931 36.2788L50.5393 28H51.9379L60.3125 36.2788H58.931Z' fill='#2E3133'/></svg>"
	];
	let vibrazione = ["Vibrazione", data[deviceId][columnNames[8]], "vibrazione", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M66.8806 33.296L51.0304 17.1357C50.3107 16.4081 49.3531 16 48.3316 16C47.3101 16 46.3525 16.4022 45.6328 17.1357L17.1187 46.197C15.6271 47.7172 15.6271 50.1838 17.1187 51.704L32.9747 67.8643C33.6886 68.5919 34.652 69 35.6735 69C36.695 69 37.6526 68.5978 38.3723 67.8643L66.8864 38.803C68.3722 37.2828 68.3722 34.8103 66.8806 33.296V33.296ZM35.6735 64.2738L20.6358 48.9475L48.3316 20.7203L63.3635 36.0525L35.6735 64.2738ZM21.1523 34.3193C21.3323 34.5027 21.6224 34.5027 21.8024 34.3193L33.973 21.9152C34.1529 21.7318 34.1529 21.436 33.973 21.2527L31.7443 18.9813C31.5644 18.7979 31.2742 18.7979 31.0943 18.9813L18.9179 31.3735C18.7379 31.5569 18.7379 31.8527 18.9179 32.036L21.1523 34.3193ZM62.8585 50.6807C62.6786 50.4973 62.3884 50.4973 62.2085 50.6807L50.0263 63.0907C49.8464 63.2741 49.8464 63.5699 50.0263 63.7532L52.255 66.0247C52.4349 66.208 52.7251 66.208 52.905 66.0247L65.0814 53.6205C65.2613 53.4372 65.2613 53.1414 65.0814 52.958L62.8585 50.6807Z' fill='#2E3133'/></svg>"];
	let sim = ["Scheda Madre", data[deviceId][columnNames[9]], "sim", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M66.4766 39.4609C67.3179 39.4609 68 38.7788 68 37.9375C68 37.0962 67.3179 36.4141 66.4766 36.4141H59.7734V31.3359H66.4766C67.3179 31.3359 68 30.6538 68 29.8125C68 28.9712 67.3179 28.2891 66.4766 28.2891H59.7734V27.2734C59.7734 25.5934 58.4066 24.2266 56.7266 24.2266H55.7109V17.5234C55.7109 16.6821 55.0288 16 54.1875 16C53.3462 16 52.6641 16.6821 52.6641 17.5234V24.2266H47.5859V17.5234C47.5859 16.6821 46.9038 16 46.0625 16C45.2212 16 44.5391 16.6821 44.5391 17.5234V24.2266H39.4609V17.5234C39.4609 16.6821 38.7788 16 37.9375 16C37.0962 16 36.4141 16.6821 36.4141 17.5234V24.2266H31.3359V17.5234C31.3359 16.6821 30.6538 16 29.8125 16C28.9712 16 28.2891 16.6821 28.2891 17.5234V24.2266H27.2734C25.5934 24.2266 24.2266 25.5934 24.2266 27.2734V28.2891H17.5234C16.6821 28.2891 16 28.9712 16 29.8125C16 30.6538 16.6821 31.3359 17.5234 31.3359H24.2266V36.4141H17.5234C16.6821 36.4141 16 37.0962 16 37.9375C16 38.7788 16.6821 39.4609 17.5234 39.4609H24.2266V44.5391H17.5234C16.6821 44.5391 16 45.2212 16 46.0625C16 46.9038 16.6821 47.5859 17.5234 47.5859H24.2266V52.6641H17.5234C16.6821 52.6641 16 53.3462 16 54.1875C16 55.0288 16.6821 55.7109 17.5234 55.7109H24.2266V56.7266C24.2266 58.4066 25.5934 59.7734 27.2734 59.7734H28.2891V66.4766C28.2891 67.3179 28.9712 68 29.8125 68C30.6538 68 31.3359 67.3179 31.3359 66.4766V59.7734H36.4141V66.4766C36.4141 67.3179 37.0962 68 37.9375 68C38.7788 68 39.4609 67.3179 39.4609 66.4766V59.7734H44.5391V66.4766C44.5391 67.3179 45.2212 68 46.0625 68C46.9038 68 47.5859 67.3179 47.5859 66.4766V59.7734H52.6641V66.4766C52.6641 67.3179 53.3462 68 54.1875 68C55.0288 68 55.7109 67.3179 55.7109 66.4766V59.7734H56.7266C58.4066 59.7734 59.7734 58.4066 59.7734 56.7266V55.7109H66.4766C67.3179 55.7109 68 55.0288 68 54.1875C68 53.3462 67.3179 52.6641 66.4766 52.6641H59.7734V47.5859H66.4766C67.3179 47.5859 68 46.9038 68 46.0625C68 45.2212 67.3179 44.5391 66.4766 44.5391H59.7734V39.4609H66.4766ZM56.7266 56.7266H27.2734V27.2734H56.7266C56.7286 57.5451 56.7367 56.7266 56.7266 56.7266Z' fill='#2E3133'/><path d='M48.1553 32.7978C47.8696 32.5121 47.4821 32.3516 47.0781 32.3516H36.9219C36.5179 32.3516 36.1304 32.5121 35.8447 32.7978L32.7978 35.8447C32.5121 36.1304 32.3516 36.5179 32.3516 36.9219V47.0781C32.3516 47.4821 32.5121 47.8696 32.7978 48.1553L35.8447 51.2022C36.1304 51.4879 36.5179 51.6484 36.9219 51.6484H47.0781C47.4821 51.6484 47.8696 51.4879 48.1553 51.2022L51.2022 48.1553C51.4879 47.8696 51.6484 47.4821 51.6484 47.0781V36.9219C51.6484 36.5179 51.4879 36.1304 51.2022 35.8447L48.1553 32.7978ZM48.6016 46.4471L46.4471 48.6016H37.553L35.3984 46.4471V37.553L37.5529 35.3984H46.447L48.6016 37.5529V46.4471Z' fill='#2E3133'/></svg>"];
	let ecc = ["ECC", data[deviceId][columnNames[10]], "ecc", "<svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'><rect opacity='0' width='84' height='84' fill='#C4C4C4'/><path d='M24 55.5625V28H29.5774L37.969 36.2788H32.3746V47.3005H51.9379V45.9207H33.7732L42.1477 37.6587H60.3125V55.5625H24ZM39.3676 36.2788L30.976 28H36.5704L44.9449 36.2788H39.3676ZM49.1407 36.2788L40.7662 28H44.9449L53.3365 36.2788H49.1407ZM58.931 36.2788L50.5393 28H51.9379L60.3125 36.2788H58.931Z' fill='#2E3133'/></svg>"];

  // include all declared arrays into one
	let allServices = [
		screen,
		connettore,
		cameraAnteriore,
		cameraPosteriore,
		vibrazione,
		sim,
		ecc
	];

	// clean html before fetching
	document.getElementById("services").innerHTML = "";
	document.getElementById("fetched-device").innerHTML = nome[1];
	
	
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
	});
}

document.querySelectorAll(".device").forEach((device) => {
	device.addEventListener("click", (event) => {
		var deviceId = parseInt(device.dataset.id);
// 		var deviceName = this.innerHTML;
		
// 		document.getElementById("fetched-device").innerHTML = deviceName;

		// console.log(deviceId);

		// assigning placeholder
		document.getElementById("services").innerHTML = "<div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div>"
		document.getElementById("pricing").classList.add("show");
		document.getElementById("block").classList.add("show");

		document.querySelectorAll(".device").forEach((device) => {
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
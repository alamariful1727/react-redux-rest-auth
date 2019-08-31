importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
	apiKey: "AIzaSyAqPOstYGr2y0T58hW5K5k31l_M_IxXUe4",
	authDomain: "push-notification-js.firebaseapp.com",
	databaseURL: "https://push-notification-js.firebaseio.com",
	projectId: "push-notification-js",
	storageBucket: "push-notification-js.appspot.com",
	messagingSenderId: "198403718492",
	appId: "1:198403718492:web:3ee5bd6258a5a1b5"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const promiseChain = clients
		.matchAll({
			type: "window",
			includeUncontrolled: true
		})
		.then(windowClients => {
			for (let i = 0; i < windowClients.length; i++) {
				const windowClient = windowClients[i];
				windowClient.postMessage(payload);
			}
		})
		.then(() => {
			return registration.showNotification("my notification title");
		});
	return promiseChain;
});

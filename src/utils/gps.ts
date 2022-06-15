// import RNLocation from 'react-native-location';

// export const GpsUtils = (() => {
//   const props = {
//     locationPermission: false,
//   };

//   return {
//     async verifyLocationPermission() {
//       try {
//         await RNLocation.configure({
//           distanceFilter: 50,
//         });

//         await RNLocation.requestPermission({
//           ios: 'whenInUse',
//           android: {
//             detail: 'fine',
//           },
//         });

//         props.locationPermission = true;
//       } catch (err) {
//         console.log(err);
//       }
//     },
//     async getCoordinates() {
//       try {
//         return await RNLocation.getLatestLocation({ timeout: 5000 });
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   };
// })();

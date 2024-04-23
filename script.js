body {
  /* Styling */
  color: white;
  background-color: #53416b;
  font-family: 'Poppins';
  font-size: 20px;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;

  /* Positioning */
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

hr {
  border: 1px solid black;
}

header {
  /* Styling */
  color: #000000;
  background-color: white;
  font-size:17px;

  /* Positioning */
  text-align: left;
  align-items: center;
  padding: 5px;
  left: 0;
  width: 100%;
  display: flex;

}

footer {
  /* Styling */
  color: white;
  text-align: center;
  font-size: 10px;

  /* Positioning */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%; 
}

.showContactInfo {
  /* Styling */
  color: black;
  background: linear-gradient(45deg, #b176d8,lightgreen, #b176d8);
  text-align: center;
  cursor: pointer;
  font-size: 15px;

  /* Positioning */
  position: fixed;
  bottom: 170px;
  right: 20px;
  padding: 0px 15px;
  border-radius: 15px;
  border: 3px solid black;
  width: 200px;
}

.showClassroom {
  /* Styling */
  color: black;
  background: linear-gradient(45deg, #b176d8,rgb(121, 212, 224), #b176d8);
  text-align: center;
  cursor: pointer;
  font-size: 15px;

  /* Positioning */
  position: fixed;
  bottom: 100px;
  right: 20px;
  padding: 0px 15px;
  border-radius: 15px;
  border: 3px solid black;
  width: 200px;
}

.showInsta {
  /* Styling */
  color: black;
  background: linear-gradient(45deg, #b176d8, #df5c5c, #e7ad5a, #b176d8);
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  /* Positioning */
  position: fixed;
  bottom: 35px;
  right: 20px;
  padding: 0px 15px;
  border-radius: 15px;
  border: 3px solid black;
  width: 200px;
}

.nextMeeting {
  /* Styling */
  color: black;
  background: linear-gradient(45deg, #b176d8, #e6c868, #b176d8);
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  /* Positioning */
  position: fixed;
  bottom: 35px;
  left: 20px;
  border-radius: 15px;
  border: 3px solid black;
  width: 250px;
}

.main {
  /* Styling */
  background: linear-gradient(to right, rgb(52, 80, 175), rgb(59, 199, 94));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  text-align: center;
  cursor: pointer;
  font-size: 5vw;
  font-weight: bold;

  /* Positioning */
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  margin-right: 10px;
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none;
}

.star:nth-child(1) {
  width: 10px;
  height: 10px;
  top: 20%;
  left: 30%;
}

.star:nth-child(2) {
  width: 15px;
  height: 15px;
  top: 50%;
  left: 80%;
}

.star:nth-child(3) {
  width: 8px;
  height: 8px;
  top: 80%;
  left: 50%;
}

.star:nth-child(4) {
  width: 12px;
  height: 12px;
  top: 30%;
  left: 40%;
}

.star:nth-child(5) {
  width: 6px;
  height: 6px;
  top: 30%;
  left: 60%;
}

.star:nth-child(6) {
  width: 15px;
  height: 15px;
  top: 90%;
  left: 10%;
}

.star:nth-child(7) {
  width: 15px;
  height: 15px;
  top: 45%;
  left: 20%;
}

.star:nth-child(8) {
  width: 5px;
  height: 5px;
  top: 10%;
  left: 10%;
}

.star:nth-child(9) {
  width: 15px;
  height: 15px;
  top: 70%;
  left: 80%;
}

.star:nth-child(10) {
  width: 6px;
  height: 6px;
  top: 90%;
  left: 70%;
}

.star:nth-child(11) {
  width: 10px;
  height: 10px;
  top: 20%;
  left: 90%;
}

#dvdSquare {
  width: 20px;
  height: 20px;
  border: 3px solid black;
  position: absolute;
  background-color: white;
  z-index: 9999;
}

#showRoomNum {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#showRoomNum.bolded {
  font-weight: bold;
}

#showClubHeads {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#showClubHeads.bolded {
  font-weight: bold;
}

#showClassroom {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#showClassroom.bolded{
  font-weight: bold;
  font-size: 110%;
}

#showContactInfo {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#showContactInfo.bolded {
  font-weight: bold;
  font-size: 105%;
}

#showInsta {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#showInsta.bolded {
  font-weight: bold;
  font-size: 110%;
}

#nextMeeting {
  cursor: pointer; 
  transition: font-weight 0.1s ease; 
}

#nextMeeting.bolded {
  font-weight: bold;
  font-size: 110%;
}

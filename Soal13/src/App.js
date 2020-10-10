import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Quiz13.css';

class PegawaiCard extends React.Component {
  render() {
    let item = this.props.item;
    return (
      <>
        <div className="responsive">
          <div className="gallery">
            <div className="column">
              <img src={item.photo} alt="Snow" style={{ maxWidth: "100%", height: "auto", position: "center" }} />
            </div>
            <div className="desc">
              <b>{item.gender == 'Male' ? 'Mr' : 'Mrs'} {item.name}</b>
              <br />
              <br />
              <label>{item.profession}</label>
              <br />
              <br />
              <label>{item.age} years old</label>
              <br />
            </div>
          </div>
        </div>
      </>
    )
  }
}

class PegawaiList extends React.Component {
  render() {
    return (
      <>
        {
          this.props.records.map((item) => {
            return (
              <PegawaiCard item={item} />
            )
          })
        }
      </>
    )
  }
}

function App() {
  const data = [{ name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" }, { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" }, { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" }, { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }]
  return (
    <div className="App">
      {
        <PegawaiList records={data} />
      }
    </div >
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import ChartItem from './components/ChartItem';
import Area from './components/Area';
import { render } from '@testing-library/react';

function App() {

  const getRandomNumber= () => {
    return Math.floor(Math.random()*100+1)
  }

  const [barData, setBarData] = useState([
    {
      id:1,
      title:"Facebook",
      color: "#4267B2",
      value: getRandomNumber()
    },
    {
      id:2,
      title:"Amazon",
      color: "#FF9900",
      value: getRandomNumber()
    },
    {
      id:3,
      title:"Youtube",
      color: "#FF0000",
      value: getRandomNumber()
    },
    {
      id:4,
      title:"Google",
      color: "#34A853",
      value: getRandomNumber()
    },
    {
      id:5,
      title:"Microsoft",
      color: "#F25022",
      value: getRandomNumber()
    }
  ])

  const findBigBarItem = (data) => {
    return data.sort((val1,val2)=> val2.value-val1.value)[0].value
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom= () => {
    let data=[...barData]
    data.forEach((item) => {
      item.value+=getRandomNumber()
    })
    setBigBarData(findBigBarItem(data))
    setBarData(data)
  }

  useEffect(()=> {
    let timer;
    timer=setInterval(()=> {
      setBarDataWithRandom()
    },500)
  },[])

  const renderBarItem=(item,index)=> {
    let rate=item.value/bigBarData
    rate=rate*(1000 - 40)
    const percent =(rate*100)/1040
    return <ChartItem
    key={item.id}
    backgroundColor= {item.color}
    width={percent+"%"}
    text={item.title}
    count={item.value}
    top={(index===0?10:(index*40)+20)+'px'}
    />
  }


  return (
    <div>
      <div className="app-title">Firmaların Müşteri Sayıları</div>
      
      <Area data={barData}>
        {barData.map((item,index)=> renderBarItem(item,index))}
      </Area>
    </div>
  );
}

export default App;

/***************************************************/
/* Componentlerin Oluşturulması */

/*
import { useEffect, useState } from 'react';
import './App.css';
import ChartItem from './components/ChartItem';
import Area from './components/Area';
import { render } from '@testing-library/react';

function App() {

  const getRandomNumber= () => {
    return Math.floor(Math.random()*100+1)
  }

  const [barData, setBarData] = useState([
    {
      id:1,
      title:"Facebook",
      color: "#4267B2",
      value: getRandomNumber()
    },
    {
      id:2,
      title:"Amazon",
      color: "#FF9900",
      value: getRandomNumber()
    },
    {
      id:3,
      title:"Youtube",
      color: "#FF0000",
      value: getRandomNumber()
    },
    {
      id:4,
      title:"Google",
      color: "#34A853",
      value: getRandomNumber()
    },
    {
      id:5,
      title:"Microsoft",
      color: "#F25022",
      value: getRandomNumber()
    }
  ])

  const findBigBarItem = (data) => {
    return data.sort((val1,val2)=> val2.value-val1.value)[0].value
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom= () => {
    let data=[...barData]
    data.forEach((item) => {
      item.value+=getRandomNumber()
    })
    setBarData(data)
  }

  useEffect(()=> {
    let timer;
    timer=setInterval(()=> {
      setBarDataWithRandom()
    },500)
  },[])

  const renderBarItem=(item,index)=> {
    let rate=item.value/bigBarData
    rate=rate*(1000 - 40)
    const percent =(rate*100)/1040
    return <ChartItem
    key={item.id}
    backgroundColor= {item.color}
    width={percent+"%"}
    text={item.title}
    count={item.value}
    />
  }


  return (
    <div>
      <div className="app-title">Firmaların Müşteri Sayıları</div>
      
      <Area data={barData}>
        {barData.map((item)=> renderBarItem(item))}
      </Area>
    </div>
  );
}

export default App;

*/

/***************************************************/

/* Küçükten Büyüğe sıraladık yazdırdık alt alta console'da
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const getRandomNumber= () => {
    return Math.floor(Math.random()*100+1)
  }

  const [barData, setBarData] = useState([
    {
      id:1,
      title:"Facebook",
      color: "#4267B2",
      value: getRandomNumber()
    },
    {
      id:2,
      title:"Amazon",
      color: "#FF9900",
      value: getRandomNumber()
    },
    {
      id:3,
      title:"Youtube",
      color: "#FF0000",
      value: getRandomNumber()
    },
    {
      id:4,
      title:"Google",
      color: "#34A853",
      value: getRandomNumber()
    },
    {
      id:5,
      title:"Microsoft",
      color: "#F25022",
      value: getRandomNumber()
    }
  ])

  const findBigBarItem = (data) => {
    return data.sort((val1,val2)=> val2.value-val1.value)[0].value
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom= () => {
    let data=[...barData]
    data.forEach((item) => {
      item.value=getRandomNumber()
    })
    setBarData(data)
  }

  useEffect(()=> {
    let timer;
    timer=setInterval(()=> {
      //setBarDataWithRandom()
    },500)
  },[])

  const renderBarItem=(item,index)=> {
    let rate=item.value/bigBarData
    rate=rate*(1000 - 40)
    const percent =(rate*100)/1040
    console.log(percent);
  }


  return (
    <div className="App">
      <header className="App-header">
        Yarışan Grafikler
        {barData.map((item)=> {
          renderBarItem(item)
        })}

      </header>
    </div>
  );
}

export default App;
*/

/*Küçüktenbüyüğe sıraladık value'ları
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const getRandomNumber= () => {
    return Math.floor(Math.random()*100+1)
  }

  const [barData, setBarData] = useState([
    {
      id:1,
      title:"Facebook",
      color: "#4267B2",
      value: getRandomNumber()
    },
    {
      id:2,
      title:"Amazon",
      color: "#FF9900",
      value: getRandomNumber()
    },
    {
      id:3,
      title:"Youtube",
      color: "#FF0000",
      value: getRandomNumber()
    },
    {
      id:4,
      title:"Google",
      color: "#34A853",
      value: getRandomNumber()
    },
    {
      id:5,
      title:"Microsoft",
      color: "#F25022",
      value: getRandomNumber()
    }
  ])

  const findBigBarItem = (data) => {
    return data.sort((val1,val2)=> val2.value-val1.value)[0].value
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom= () => {
    let data=[...barData]
    data.forEach((item) => {
      item.value=getRandomNumber()
    })
    setBarData(data)
  }

  useEffect(()=> {
    let timer;
    timer=setInterval(()=> {
      //setBarDataWithRandom()
    },500)
  },[])


  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(bigBarData)}
        {JSON.stringify(barData)}
      </header>
    </div>
  );
}

export default App;
*/

/* Yarım saniyede bir datalar güncelleniyor

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const getRandomNumber= () => {
    return Math.random(Math.random()*100+1)
  }

  const [barData, setBarData] = useState([
    {
      id:1,
      title:"Facebook",
      color: "#4267B2",
      value: getRandomNumber()
    },
    {
      id:2,
      title:"Amazon",
      color: "#FF9900",
      value: getRandomNumber()
    },
    {
      id:3,
      title:"Youtube",
      color: "#FF0000",
      value: getRandomNumber()
    },
    {
      id:4,
      title:"Google",
      color: "#34A853",
      value: getRandomNumber()
    },
    {
      id:5,
      title:"Microsoft",
      color: "#F25022",
      value: getRandomNumber()
    }
  ])

  const setBarDataWithRandom= () => {
    let data=[...barData]
    data.forEach((item) => {
      item.value=getRandomNumber()
    })
    setBarData(data)
  }

  useEffect(()=> {
    let timer;
    timer=setInterval(()=> {
      setBarDataWithRandom()
    },500)
  },[])


  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(barData)}
      </header>
    </div>
  );
}

export default App;
*/
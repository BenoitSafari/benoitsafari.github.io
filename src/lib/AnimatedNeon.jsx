import { useEffect, useState, useRef } from 'react';
import SvgNeon from './AnimatedNeon.svg';
import styles from './AnimatedNeon.module.scss';

function AnimatedNeon() {
  const [ animIsRunning, setAnimIsRunning ] = useState(false);
  const svgRef = useRef();
  const pathRefs = [ 
    useRef(),useRef(),useRef(), useRef(),useRef(),useRef(), 
    useRef(),useRef(),useRef(), useRef(),useRef(),useRef(), 
    useRef(),useRef(),useRef(), useRef(),useRef(),useRef(), 
    useRef(),useRef(),useRef(), useRef() 
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      neonAnimHandler(getRandomInteger(0, 3));}, 15000);
    return () => clearTimeout(timer);
  });

  const getRandomInteger = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const toggleNeon = (target = -1) => {
    if (target < 0) {
      pathRefs.forEach(path => {
        path.current.classList.toggle(styles.isOn);
      });
    } else {
      pathRefs[target].current.classList.toggle(styles.isOn);
    }};
  const neonAnimHandler = (requestAnim) => {
    if (!animIsRunning) {
      let firstPath = 0;
      let secondPath = 0;
      let thirdPath = 0;
      setAnimIsRunning(true);
      switch (requestAnim) {
      case 0:
        for (let i = 0; i < 300; i += 60) {
          setTimeout(toggleNeon, i);}
        for (let i = 1900; i < 2080; i += 40) {
          setTimeout(toggleNeon, i);}
        setTimeout(() => {setAnimIsRunning(false);}, 2150);
        break;
      case 1:
        firstPath = getRandomInteger(0, 21);
        for (let i = 0; i < 300; i += 60) {
          setTimeout(() => {toggleNeon(firstPath);}, i);}
        for (let i = 940; i < 1400; i += 40) {
          setTimeout(() => {toggleNeon(firstPath);}, i);}
        for (let i = 1900; i < 2080; i += 40) {
          setTimeout(() => {toggleNeon(firstPath);}, i);}
        setTimeout(() => {setAnimIsRunning(false);}, 2150);
        break;
      case 2:
        firstPath = getRandomInteger(0, 15);
        secondPath = firstPath + 1;
        thirdPath = firstPath + 2;
        for (let i = 0; i < 400; i += 60) {
          setTimeout(() => {toggleNeon(secondPath);}, i);}
        for (let i = 740; i < 1160; i += 60) {
          setTimeout(() => {toggleNeon(firstPath);}, i);}
        for (let i = 840; i < 1340; i += 40) {
          setTimeout(() => {toggleNeon(thirdPath);}, i);}
        setTimeout(() => {
          for (let i = 0; i < 400; i += 60) {
            setTimeout(() => {toggleNeon(secondPath);}, i);}
          for (let i = 740; i < 1160; i += 60) {
            setTimeout(() => {toggleNeon(firstPath);}, i);}
          for (let i = 840; i < 1340; i += 40) {
            setTimeout(() => {toggleNeon(thirdPath);}, i);}
        }, 6340);
        setTimeout(() => {setAnimIsRunning(false);}, 12700);
        break;
      case 3:
        firstPath = getRandomInteger(0, 5);
        secondPath = firstPath + getRandomInteger(5, 10);
        for (let i = 0; i < 640; i += 60) {
          setTimeout(() => {toggleNeon(firstPath);}, i);}
        for (let i = 360; i < 800; i += 40) {
          setTimeout(() => {toggleNeon(secondPath);}, i);}
        setTimeout(() => {
          for (let i = 0; i < 640; i += 60) {
            setTimeout(() => {toggleNeon(firstPath);}, i);}
          for (let i = 360; i < 800; i += 40) {
            setTimeout(() => {toggleNeon(secondPath);}, i);}
        }, 3000);
        setTimeout(() => {setAnimIsRunning(false);}, 6500);
        break;
      }}}; 
  
  return (
    <>
      <SvgNeon 
        pathRef0={pathRefs[0]}
        pathRef1={pathRefs[1]}
        pathRef2={pathRefs[2]}
        pathRef3={pathRefs[3]}
        pathRef4={pathRefs[4]}
        pathRef5={pathRefs[5]}
        pathRef6={pathRefs[6]}
        pathRef7={pathRefs[7]}
        pathRef8={pathRefs[8]}
        pathRef9={pathRefs[9]}
        pathRef10={pathRefs[10]}
        pathRef11={pathRefs[11]}
        pathRef12={pathRefs[12]}
        pathRef13={pathRefs[13]}
        pathRef14={pathRefs[14]}
        pathRef15={pathRefs[15]}
        pathRef16={pathRefs[16]}
        pathRef17={pathRefs[17]}
        pathRef18={pathRefs[18]}
        pathRef19={pathRefs[19]}
        pathRef20={pathRefs[20]}
        pathRef21={pathRefs[21]}
        svgRef={svgRef}
      />
    </>
  );
}

export default AnimatedNeon;
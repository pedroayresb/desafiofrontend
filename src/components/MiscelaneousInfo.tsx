import { useState, useEffect } from 'react';

interface Props {
  height: number;
  weight: number;
}

const TO_DIVIDE_HEIGHT = 2.54;
const TO_DIVIDE_FOOT = 12;
const TO_MULTIPLY_WEIGHT = 2.205;
const TEN = 10;

function MiscelaneousInfo({ height, weight }: Props) {
  const [heightInAmericanUnits, setHeightInAmericanUnits] = useState('');
  const [weightInPounds, setWeightInPounds] = useState(0);

  const convertHeight = (heightInDecimeter: number) => {
    const inCentimeters = heightInDecimeter * TEN;
    const inFeet = inCentimeters / TO_DIVIDE_HEIGHT;
    const inInches = inFeet % TO_DIVIDE_FOOT;
    const inFeetRounded = Math.floor(inFeet / TO_DIVIDE_FOOT);
    const inInchesRounded = Math.round(inInches);

    setHeightInAmericanUnits(`${inFeetRounded}' ${inInchesRounded}"`);
  };

  const convertWeight = (weightInKilograms: number) => {
    const inPounds = (weightInKilograms / TEN) * TO_MULTIPLY_WEIGHT;

    setWeightInPounds(Math.floor(inPounds));
  };

  useEffect(() => {
    convertHeight(height);
    convertWeight(weight);
  });

  return (
    <div
      className="grid grid-cols-1 gap w-full place-items-center"
    >
      <h1 className="text-2xl">Miscelaneous Info</h1>
      <div
        className="grid grid-cols-1 grid-flow-row gap-2 w-full place-items-center"
      >
        <div
          className="flex flex-row"
        >
          <p className="p-2">Height: </p>
          <p className="p-2">
            { heightInAmericanUnits }
          </p>
          <p className="p-2">
            { height / TEN }
            {' '}
            m
          </p>
        </div>
        <div
          className="flex flex-row"
        >
          <p className="p-2">Weight: </p>
          <p className="p-2">
            { weightInPounds }
            {' '}
            lbs
          </p>
          <p className="p-2">
            { weight / TEN }
            {' '}
            kg
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiscelaneousInfo;

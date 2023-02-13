import { useState, useEffect } from 'react';

interface AbilitiesContainerProps {
  abilities: {
    ability: {
      'name': string;
      url: string;
    };
    'is_hidden': boolean;
    slot: number;
  }[];
}

function AbilitiesContainer(props: AbilitiesContainerProps) {
  const { abilities } = props;
  const [hiddenAbilities,
    setHiddenAbilities] = useState(abilities.filter((ability) => ability.is_hidden));
  const [nonHiddenAbilities,
    setNonHiddenAbilities] = useState(abilities.filter((ability) => !ability.is_hidden));
  const [collumClassName, setCollumClassName] = useState(nonHiddenAbilities.length > 1
    ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-1 gap-2');

  const replaceWithSpace = (string: string) => string.replace(/-/g, ' ');

  const renderAbility = (abilityName: string, key: number, isHidden: boolean) => (
    <div
      key={ key }
    >
      <p
        className="capitalize"
        key={ key }
      >
        { replaceWithSpace(abilityName) }
      </p>
      { isHidden && <p className="text-sm text-center">Hidden</p> }
    </div>
  );

  return (
    <div
      className="grid grid-cols-1 gap-2 w-full place-items-center"
    >
      <h1 className="text-2xl">Abilities</h1>
      <div
        data-testid="abilities-container"
        className={ collumClassName }
      >
        { nonHiddenAbilities
          .map((ability, index) => renderAbility(ability.ability.name, index, false)) }
      </div>
      <div>
        { hiddenAbilities
          .map((ability, index) => renderAbility(ability.ability.name, index, true)) }
      </div>
    </div>
  );
}

export default AbilitiesContainer;

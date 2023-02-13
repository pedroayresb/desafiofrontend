interface Props {
  stat: {
    'base_stat': number;
    effort: number;
    stat: {
      'name': string;
      url: string;
    };
  };
}

interface ClassNameByStat {
  [key: string]: string;
}

const FIFTY = 50;
const SEVENTY_TWO = 72;
const EIGHTY_EIGHT = 88;
const ONE_HUNDRED_AND_FOUR = 104;
const ONE_HUNDRED_AND_TWENTY = 120;

function Stat({ stat }: Props) {
  const lineSizeByStatSize = (base: number) => {
    if (base <= FIFTY) return 'w-1/6';
    if (base <= SEVENTY_TWO) return 'w-1/3';
    if (base <= EIGHTY_EIGHT) return 'w-1/2';
    if (base <= ONE_HUNDRED_AND_FOUR) return 'w-2/3';
    if (base < ONE_HUNDRED_AND_TWENTY) return 'w-5/6';
    if (base === ONE_HUNDRED_AND_TWENTY) return 'w-full';
    return 'w-full';
  };

  const classNameByStat: ClassNameByStat = {
    hp: 'bg-red-500',
    attack: 'bg-yellow-500',
    defense: 'bg-green-500',
    'special-attack': 'bg-blue-500',
    'special-defense': 'bg-purple-500',
    speed: 'bg-pink-500',
  };

  const { stat: { name } } = stat;
  const baseStat = stat.base_stat;

  const replaceWithSpace = (string: string) => string.replace(/-/g, ' ');

  return (
    <div
      className="grid grid-cols-2 gap-2"
    >
      <p
        className="capitalize"
      >
        { replaceWithSpace(name) }
      </p>
      <div>
        <div
          className="relative h-4 rounded-full bg-gray-300 flex flex-row"
        >
          <div
            data-testid={ `stat-line-${name}` }
            className={ `absolute h-full rounded-full 
            ${lineSizeByStatSize(baseStat)} ${classNameByStat[name]}` }
          />
        </div>
        <p>
          { baseStat }
        </p>
      </div>
    </div>
  );
}

export default Stat;

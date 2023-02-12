import Stat from './Stat';

interface Props {
  stats: {
    'base_stat': number;
    effort: number;
    stat: {
      'name': string;
      url: string;
    };
  }[];
}

function StatsContainer({ stats }: Props) {
  return (
    <div
      className="grid grid-cols-1 gap-2 w-full place-items-center"
    >
      <h1 className="text-2xl">Stats</h1>
      <div
        className="grid grid-cols-2 gap-2"
      >
        { stats.map((stat, index) => (
          <Stat
            key={ index }
            stat={ stat }
          />
        )) }
      </div>
    </div>
  );
}

export default StatsContainer;

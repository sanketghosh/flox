import AddBoardDialog from "@/components/dialogs/add-board-dialog";
import { Link } from "react-router-dom";

type BoardsTypes = {
  board_cards: string[];
};

export default function Boards({ board_cards }: BoardsTypes) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <AddBoardDialog />

      {board_cards.map((item, idx) => (
        <Link
          to={"/"}
          key={idx}
          className="flex cursor-pointer select-none flex-col items-center justify-center space-y-2 rounded-md bg-secondary/30 px-3 py-4 text-center transition-all hover:bg-secondary/50"
        >
          <div className="text-4xl">🤩</div>
          <p className="line-clamp-1">{item}</p>
        </Link>
      ))}
    </div>
  );
}

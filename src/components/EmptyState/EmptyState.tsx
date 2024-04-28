import emptyBox from "../../assets/images/empty-box.png";
import "./styles.scss";

export function EmptyState({ deleted = false }: { deleted?: boolean }) {
  return (
    <div>
      <p className="description">
        {deleted
          ? "You don't have deleted todos..."
          : "You don't have todos. Use input to add todo..."}
      </p>

      <img className="empty-box" src={emptyBox} alt="empty box" />
    </div>
  );
}

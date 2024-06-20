import React from "react";
import { useNavigate } from "react-router-dom";
import Participant from "../../types/Participant";

type Props = {
  participant: Participant;
  handleDelete: (participant: Participant) => void;
};

const ParticipantListItem: React.FC<Props> = ({
  participant,
  handleDelete,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/participants/${participant.id}`);
  };

  return (
    <div className="min-w-56 bg-green-500 p-4 flex flex-col gap-10">
      <div className="flex flex-col items-center">
        <h2 className="cursor-pointer font-bold" onClick={handleClick}>
          {participant.navn}
        </h2>
        <h2>{participant.køn}</h2>
        <h2>{participant.alder} years old</h2>
        <h2>{participant.klub}</h2>
        <strong>Disciplines:</strong>{" "}
        {participant.disciplines && participant.disciplines.length > 0
          ? participant.disciplines.map((d) => d.name).join(", ")
          : "None"}
      </div>
      <div className="flex justify-between">
        <button onClick={() => navigate(`/edit/participant/${participant.id}`)}>
          Edit
        </button>
        <button onClick={() => handleDelete(participant)}>Delete</button>
      </div>
    </div>
  );
};

export default ParticipantListItem;

// Add this line to make the file a module
export {};

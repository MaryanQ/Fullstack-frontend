import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getParticipants, deleteParticipant } from "../../services/ApiFacade";
import Participant from "../../types/Participant";
import ParticipantListItem from "./ParticipantListItem";

type Props = {
  participants: Participant[];
  setParticipants: Dispatch<SetStateAction<Participant[]>>;
};

const ParticipantList: React.FC<Props> = ({
  participants,
  setParticipants,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const data = await getParticipants();
        setParticipants(data);
      } catch (error) {
        setError("Failed to fetch participants.");
        console.error("Failed to fetch participants:", error);
      }
    };

    fetchParticipants();
  }, [setParticipants]);

  const handleDelete = async (participantToDelete: Participant) => {
    try {
      await deleteParticipant(participantToDelete.id);
      alert(`${participantToDelete.navn} has been deleted.`);
      setParticipants((prev) =>
        prev.filter((p) => p.id !== participantToDelete.id)
      );
    } catch (error) {
      alert(`Could not delete ${participantToDelete.navn}.`);
      console.error("Failed to delete participant:", error);
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      {participants.length ? (
        <div className="grid animate-fade-in grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {participants.map((participant) => (
            <ParticipantListItem
              key={participant.id}
              participant={participant}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-3xl text-center">No participants found</h2>
      )}
    </>
  );
};

export default ParticipantList;

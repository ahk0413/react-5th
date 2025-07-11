import type { Note } from "../api/getNote";
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";

interface Props{
  newNoteId: number;
  onCreate: (newNoteItem:Note) => void;
  onChangeRoot: (nextRoute:string, pickNoteId?:number) => void;
}

function NoteCreatePage({newNoteId,onCreate,onChangeRoot}:Props) {

  const handleBackLink = () => onChangeRoot(ROUTES.list)

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackLink} />
      <NoteForm
        mode="edit"
        newNoteId={newNoteId}
        onCreate={onCreate}
        onBackLink={handleBackLink}
      />

    </div>
  )
}
export default NoteCreatePage
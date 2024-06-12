/**
 * Note.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-04
 * description: Note component to show notes.
 */

import React from "react";
import { getLocalizedString } from "../utils/getLocalizedString.ts";
import { InfoCircleOutlined } from "@ant-design/icons";

interface NoteProps {
  notes: string[];
  elements?: JSX.Element[];
}

const Note: React.FC<NoteProps> = ({ notes, elements }) => {
  return (
    <div className="NoteContainer">
      <div className="NoteTitle">
        <InfoCircleOutlined />
        {getLocalizedString("Common.Note")}
      </div>

      <div className="NoteContent">
        {notes.map((note, index) => (
          <div key={index} className="NoteItem">
            {note}
          </div>
        ))}

        {elements &&
          elements.map((element, index) => (
            <div key={index} className="NoteItem">
              {element}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Note;

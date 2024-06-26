/**
 * FollowFrameCharacterPage.tsx
 * Author: Wenlei Cai
 * Date: 2024-06-26
 * Description: Follow and frame a character Page
 */

import React from "react";
import {
  getLocalizedString,
  getLocalizedStringArray,
} from "../../../utils/getLocalizedString.ts";
import Note from "../../../components/Note.tsx";

const FollowFrameCharacterPage: React.FC = () => {
  return (
    <div className="FlexOne">
      <div className="ContentPageTitle">
        {getLocalizedString("FollowFrameCharacter.title")}
      </div>
      <div className="ContentPageParagraph">
        {getLocalizedString("FollowFrameCharacter.paragraphOne")}
      </div>
      <Note notes={[getLocalizedString("FollowFrameCharacter.noteOne")]}></Note>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameCharacter.subTitleOne")}
      </div>
      <ol>
        {getLocalizedStringArray("FollowFrameCharacter.stepsOne").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">
                {item}
                {index === 0 && (
                  <div className="ContentPageParagraph">
                    {getLocalizedString(
                      "FollowFrameCharacter.stepsOneSubparagraph"
                    )}
                    <ul>
                      {getLocalizedStringArray(
                        "FollowFrameCharacter.stepsOneList"
                      ).map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <div className="ContentPageParagraph">{subItem}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {index === 2 && (
                  <div className="ContentPageParagraph">
                    {getLocalizedString("FollowFrameCharacter.stepsThree")}
                  </div>
                )}
              </div>
            </li>
          )
        )}
      </ol>
      <Note notes={[getLocalizedString("FollowFrameCharacter.noteTwo")]}></Note>
      <div className="ContentPageSubtitle">
        {getLocalizedString("FollowFrameCharacter.subTitleTwo")}
      </div>
      <div className="ContentPageParagraph">
        <ol>
          {getLocalizedStringArray("FollowFrameCharacter.paragraphTwoList").map(
            (item, index) => (
              <li key={index}>
                <div className="ContentPageParagraph">{item}</div>
              </li>
            )
          )}
        </ol>
      </div>
      <ul>
        {getLocalizedStringArray("FollowFrameCharacter.stepsTwo").map(
          (item, index) => (
            <li key={index}>
              <div className="ContentPageParagraph">{item}</div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FollowFrameCharacterPage;

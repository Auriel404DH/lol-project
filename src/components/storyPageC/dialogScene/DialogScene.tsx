import React from 'react';
import DialogPerson from '../../mainPageC/dialogPerson/DialogPerson';
import { NAMES } from '../../../models/Enums';
import {
  Xayah,
  Orn,
  WarWick,
  Reketon,
  Fiora,
  HasagePlay,
  Hasage,
} from '../../../assets/characters';
import Sentences from '../../../Sentences.json';
import LastSceneStory from '../lastSceneStory/LastSceneStory';

const DialogScene = ({ inViews }: { inViews: boolean[] }) => {
  return (
    <div>
      <DialogPerson
        isView={inViews[0]}
        isNextView={inViews[1]}
        left={true}
        person={Xayah}
        name={NAMES.Xayah}
        text={Sentences.Xayah.first}
      />

      <DialogPerson
        isView={inViews[1]}
        isNextView={inViews[2]}
        left={false}
        person={Orn}
        name={NAMES.Orn}
        text={Sentences.Orn.first}
      />

      <DialogPerson
        isView={inViews[2]}
        isNextView={inViews[3]}
        left={true}
        person={WarWick}
        name={NAMES.WarWick}
        text={Sentences.WarWick.first}
      />

      <DialogPerson
        isView={inViews[3]}
        isNextView={inViews[4]}
        left={false}
        person={Reketon}
        name={NAMES.Reketon}
        text={Sentences.Reketon.first}
      />

      <DialogPerson
        isView={inViews[4]}
        isNextView={inViews[5]}
        left={true}
        person={Fiora}
        name={NAMES.Fiora}
        text={Sentences.Fiora.first}
      />

      <DialogPerson
        isView={inViews[5]}
        isNextView={inViews[6]}
        left={false}
        person={HasagePlay}
        name={NAMES.HasagePlay}
        text={Sentences.Hasage.first}
      />

      <DialogPerson
        isView={inViews[6]}
        isNextView={inViews[7]}
        left={true}
        person={Hasage}
        name={NAMES.Hasage}
        text={Sentences.Hasage.first}
      />

      <LastSceneStory isView={inViews[7]} isNextView={inViews[8]} />
    </div>
  );
};

export default DialogScene;

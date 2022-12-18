import React from 'react';

const InfoCharacter = ({ champion }: { champion: any }) => {
  return (
    <>
      <div className="text-center border mt-3 mb-4 p-2 bg-mainBG rounded-md border-mainBorder">
        <span className="border-b-2 border-mainBorder pb-1">Champion Spells</span>
        {champion?.spells.map((spell: any) => (
          <div className="p-1 text-left">{spell.name}</div>
        ))}
      </div>
      <div className="text-left bg-mainBG p-2 rounded-md border border-mainBorder mt-2 mb-4">
        <div className="">A|Damage: {champion?.stats.attackdamage}</div>
        <div className="pt-2 ">A|speed: {champion?.stats.attackspeed}</div>
        <div className="pt-2 ">Armor: {champion?.stats.armor}</div>
        <div className="pt-2 ">HP: {champion?.stats.hp}</div>
        <div className="pt-2 ">Mana: {champion?.stats.mp}</div>
        <div className="pt-2 ">Sp|Block: {champion?.stats.spellblock}</div>
      </div>
    </>
  );
};

export default InfoCharacter;

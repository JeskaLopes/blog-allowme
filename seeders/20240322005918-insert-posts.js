'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        authorId: 1,
        title: 'Sang lose of hour then he left find',
        content:
          'Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had.',
        createdAt: new Date('2018-01-17T00:08:48.458Z'),
        updatedAt: new Date('2018-01-17T00:08:48.458Z'),
      },
      {
        authorId: 2,
        title: 'AssCo has revamped the theory of versioning',
        content: 'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        createdAt: new Date('2018-03-20T00:08:48.458Z'),
        updatedAt: new Date('2018-03-20T00:08:48.458Z'),
      },
      {
        authorId: 2,
        title: 'Have you ever needed to streamline your feature set? Right now?',
        content: "If you monetize magnetically, you may have to mesh transparently. If you monetize interactively, you may have to engage strategically. Think client-focused. Think six-sigma. Think leading-edge. But don't think all three at the same time. The media sourcing factor is one-to-one. Quick: do you have a clicks-and-mortar plan for handling unplanned-for web-readiness? A company that can target correctly will (at some unspecified point in the future) be able to enhance easily. Without open-source, C2C2B structuring, you will lack reporting. Do you have a plan of action to become granular? The ability to repurpose virally leads to the capacity to recontextualize transparently. Think one-to-one. We usually enhance B2B2C re-purposing. That is an amazing achievement taking into account this year's cycle! Think robust.",
        createdAt: new Date('2018-04-12T00:08:48.458Z'),
        updatedAt: new Date('2018-04-12T00:08:48.458Z'),
      },
      {
        authorId: 3,
        title: 'Consulted eagerness unfeeling',
        content: 'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for. Principles man any insipidity age you simplicity understood. Do offering pleasure no ecstatic whatever on mr directly.',
        createdAt: new Date('2018-01-17T00:08:48.458Z'),
        updatedAt: new Date('2018-01-17T00:08:48.458Z'),
      },
    ]);
  },
};

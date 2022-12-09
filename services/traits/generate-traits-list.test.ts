import {suite} from 'uvu'
import * as assert from 'uvu/assert'
import {RawTrait} from '../../types'
import {generateTraitsList} from './generate-traits-list'

const Suite = suite('src/services/traits/generate-traits-list')

Suite('Generate traits list', () => {
  const rawTraits: RawTrait[] = [
    {
      apiName: 'Set7_SpellThief',
      desc: '(@MinUnits@) Zoe nabs a new Ability after each cast and at the start of every round.',
      effects: [
        {
          maxUnits: 25000,
          minUnits: 1,
          style: 3
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_7_SpellThief.tex',
      name: 'Spell Thief'
    },
    {
      apiName: 'Set7_Cannoneer',
      desc: 'Every 5th attack fires a cannon shot that explodes for physical damage around the target.<br><br><expandRow>(@MinUnits@) @AttackPercent*100@% Attack Damage</expandRow>',
      effects: [
        {
          maxUnits: 3,
          minUnits: 2,
          style: 1
        },
        {
          maxUnits: 5,
          minUnits: 4,
          style: 2
        },
        {
          maxUnits: 25000,
          minUnits: 6,
          style: 3
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_5_Cannoneer.tex',
      name: 'Cannoneer'
    },
    {
      apiName: 'Set7_Tempest',
      desc: 'After @DelayTime@ seconds, lightning strikes the battlefield. Enemies are stunned for @StunDuration@ second and take a percent of their maximum Health as true damage. Then, Tempest champions deal increased damage.<br><br><expandRow>(@MinUnits@) @PercentHealthDamage@% lightning, @DamageAmp@% unit damage</expandRow>',
      effects: [
        {
          maxUnits: 3,
          minUnits: 2,
          style: 1
        },
        {
          maxUnits: 5,
          minUnits: 4,
          style: 2
        },
        {
          maxUnits: 7,
          minUnits: 6,
          style: 3
        },
        {
          maxUnits: 25000,
          minUnits: 8,
          style: 4
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_7_Tempest.tex',
      name: 'Tempest'
    },
    {
      apiName: 'Set7_Assassin',
      desc: 'Innate: Leap to the enemy backline when combat starts.<br><br>Assassins\' Abilities can critically strike and they gain bonus Critical Strike Chance and bonus Critical Strike Damage.<br><br><expandRow>(@MinUnits@) +@CritChanceAmpPercent@% Crit Chance and +@CritAmpPercent@% Crit Damage</expandRow>',
      effects: [
        {
          maxUnits: 3,
          minUnits: 2,
          style: 1
        },
        {
          maxUnits: 5,
          minUnits: 4,
          style: 3
        },
        {
          maxUnits: 25000,
          minUnits: 6,
          style: 4
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_6_Assassin.tex',
      name: 'Assassin'
    },
    {
      apiName: 'Set7_Prodigy',
      desc: '(@MinUnits@) Nomsy gains a random trait each game. She summons a former Trainer to aid her in battle, who also gains this trait.<br><br>Trainers\' Ability Power is always equal to Nomsy\'s Ability Power. When Nomsy dies, Trainers gain @AttackSpeed*100@% Attack Speed.',
      effects: [
        {
          maxUnits: 25000,
          minUnits: 3,
          style: 3
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_Prodigy.TFT_Set7_Stage2.tex',
      name: 'Prodigy'
    },
    {
      apiName: 'Set7_Dragon',
      desc: 'Innate: Require 2 team slots. <br><br>Dragons provide +3 to the marked trait, and gain additional bonuses based on how many Dragons are on your team. <br><br><row>(@MinUnits@) @BonusHealth@ bonus Health</row><br><row>(@MinUnits@) and @Defenses@ Armor and Magic Resist</row><br><row>(@MinUnits@) and @PercentBonusDamage*100@% bonus damage</row><br><row>(@MinUnits@) and +@TeamSizeIncrease@ to team size</row><br><row>(@MinUnits@) and heal @Healing@ Health every second</row><br><row>(@MinUnits@) and your Dragons ascend!</row>',
      effects: [
        {
          maxUnits: 1,
          minUnits: 1,
          style: 1
        },
        {
          maxUnits: 2,
          minUnits: 2,
          style: 2
        },
        {
          maxUnits: 3,
          minUnits: 3,
          style: 2
        },
        {
          maxUnits: 4,
          minUnits: 4,
          style: 2
        },
        {
          maxUnits: 5,
          minUnits: 5,
          style: 3
        },
        {
          maxUnits: 25000,
          minUnits: 6,
          style: 4
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_7_Dragon.tex',
      name: 'Dragon'
    },
    {
      apiName: 'Set7_Ragewing',
      desc: 'Innate: Convert Mana to Rage; attacks generate 15 Rage. After casting an Ability, enrage for 4 seconds: 25% Attack Speed but can\'t gain Rage.<br><br>Gain stats when enraged:<br><br><row>(@MinUnits@) @AttackSpeedPercent@% Attack Speed and @Omnivamp@% Omnivamp (healing for a percentage of damage dealt)</row><br><row>(@MinUnits@) @AttackSpeedPercent@% Attack Speed and @Omnivamp@% Omnivamp</row><br><row>(@MinUnits@) @AttackSpeedPercent@% Attack Speed and @Omnivamp@% Omnivamp</row><br><row>(@MinUnits@) @AttackSpeedPercent@% Attack Speed and @Omnivamp@% Omnivamp</row>',
      effects: [
        {
          maxUnits: 3,
          minUnits: 2,
          style: 1
        },
        {
          maxUnits: 5,
          minUnits: 4,
          style: 2
        },
        {
          maxUnits: 7,
          minUnits: 6,
          style: 2
        },
        {
          maxUnits: 999,
          minUnits: 8,
          style: 3
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_7_Ragewing.tex',
      name: 'Ragewing'
    }
  ]

  assert.equal(generateTraitsList(rawTraits), [
    {
      name: 'Assassin',
      maxCount: 6
    },
    {
      name: 'Cannoneer',
      maxCount: 6
    },
    {
      name: 'Dragon',
      maxCount: 6
    },
    {
      name: 'Prodigy',
      maxCount: 3
    },
    {
      name: 'Ragewing',
      maxCount: 8
    },
    {
      name: 'Tempest',
      maxCount: 8
    }
  ])
})

Suite('Not include small traits', () => {
  const rawTraits: RawTrait[] = [
    {
      apiName: 'Set7_SpellThief',
      desc: '(@MinUnits@) Zoe nabs a new Ability after each cast and at the start of every round.',
      effects: [
        {
          maxUnits: 25000,
          minUnits: 1,
          style: 3
        }
      ],
      icon: 'ASSETS/UX/TraitIcons/Trait_Icon_7_SpellThief.tex',
      name: 'Spell Thief'
    }
  ]

  assert.equal(generateTraitsList(rawTraits), [])
})

Suite.run()

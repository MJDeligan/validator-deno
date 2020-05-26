import test from './test-template.ts'

test({
    validator: 'equals',
    args: ['abc'],
    valid: ['abc'],
    invalid: ['Abc', '123']
})

test({
    validator: 'equals',
    args: ['abc ', { trim: true }],
    valid: ['  abc  '],
    invalid: ['Abc', '123']
})

test({
    validator: 'equals',
    args: ['abc', { ignore_case: true }],
    valid: ['abc', 'AbC'],
    invalid: ['@bc', '123']
})

test({
    validator: 'isAscii',
    valid: [
        'foobar',
        '0987654321',
        'test@example.com',
        '1234abcDEF',
    ],
    invalid: [
        'ｆｏｏbar',
        'ｘｙｚ０９８',
        '１２３456',
        'ｶﾀｶﾅ',
    ],
})

test({
    validator: 'isBase32',
    valid: [
        'ZG======',
        'JBSQ====',
        'JBSWY===',
        'JBSWY3A=',
        'JBSWY3DP',
        'JBSWY3DPEA======',
        'K5SWYY3PNVSSA5DPEBXG6ZA=',
        'K5SWYY3PNVSSA5DPEBXG6===',
    ],
    invalid: [
        '12345',
        '',
        'JBSWY3DPtesting123',
        'ZG=====',
        'Z======',
        'Zm=8JBSWY3DP',
        '=m9vYg==',
        'Zm9vYm/y====',
    ],
})

test({
    validator: 'isBase64',
    valid: [
        'Zg==',
        'Zm8=',
        'Zm9v',
        'Zm9vYg==',
        'Zm9vYmE=',
        'Zm9vYmFy',
        'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=',
        'Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==',
        'U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==',
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw' +
        'UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye' +
        'rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619' +
        'FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx' +
        'QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ' +
        'Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ' +
        'HQIDAQAB',
    ],
    invalid: [
        '12345',
        '',
        'Vml2YW11cyBmZXJtZtesting123',
        'Zg=',
        'Z===',
        'Zm=8',
        '=m9vYg==',
        'Zm9vYmFy====',
    ],
})

test({
    validator: 'isBIC',
    valid: [
        'SBICKEN1345',
        'SBICKEN1',
        'SBICKENY',
        'SBICKEN1YYP',
    ],
    invalid: [
        'SBIC23NXXX',
        'S23CKENXXXX',
        'SBICKENXX',
        'SBICKENXX9',
        'SBICKEN13458',
        'SBICKEN',
    ],
})


test({
    validator: 'isBoolean',
    valid: [
        'true',
        'false',
        '0',
        '1',
    ],
    invalid: [
        '1.0',
        '0.0',
        'true ',
        'False',
        'True',
        'yes',
    ],
})


test({
    validator: 'isBtcAddress',
    valid: [
        '1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL',
        '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    ],
    invalid: [
        '4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        '0x56F0B8A998425c53c75C4A303D4eF987533c5597',
        'pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
    ],
})


test({
    validator: 'isDecimal',
    valid: [
        '123',
        '00123',
        '-00123',
        '0',
        '-0',
        '+123',
        '0.01',
        '.1',
        '1.0',
        '-.25',
        '-0',
        '0.0000000000001',
    ],
    invalid: [
        '0,01',
        ',1',
        '1,0',
        '-,25',
        '0,0000000000001',
        '0٫01',
        '٫1',
        '1٫0',
        '-٫25',
        '0٫0000000000001',
        '....',
        ' ',
        '',
        '-',
        '+',
        '.',
        '0.1a',
        'a',
        '\n',
    ],
})


// test({
//     validator: 'isDivisibleBy',
//     args: [2],
//     valid: ['2', '4', '100', '1000'],
//     invalid: [
//         '1',
//         '2.5',
//         '101',
//         'foo',
//         '',
//         '2020-01-06T14:31:00.135Z',
//     ],
// })

test({
    validator: 'isEmpty',
    valid: [
        '',
    ],
    invalid: [
        ' ',
        'foo',
        '3',
    ],
});

test({
    validator: 'isEmpty',
    args: [{ ignore_whitespace: false }],
    valid: [
        '',
    ],
    invalid: [
        ' ',
        'foo',
        '3',
    ],
});

test({
    validator: 'isEmpty',
    args: [{ ignore_whitespace: true }],
    valid: [
        '',
        ' ',
    ],
    invalid: [
        'foo',
        '3',
    ],
});


test({
    validator: 'isEthereumAddress',
    valid: [
        '0x0000000000000000000000000000000000000001',
        '0x683E07492fBDfDA84457C16546ac3f433BFaa128',
        '0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319',
        '0x8a718a84ee7B1621E63E680371e0C03C417cCaF6',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42',
    ],
    invalid: [
        '0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222',
        '0xFCb5AFB808b5679b4911230Aa41FfCD0cd33',
        '0b0110100001100101011011000110110001101111',
        '683E07492fBDfDA84457C16546ac3f433BFaa128',
        '1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU',
    ],
})

// test({
//     validator: 'isFloat',
//     valid: [
//         '123',
//         '123.',
//         '123.123',
//         '-123.123',
//         '-0.123',
//         '+0.123',
//         '0.123',
//         '.0',
//         '-.123',
//         '+.123',
//         '01.123',
//         '-0.22250738585072011e-307',
//     ],
//     invalid: [
//         '+',
//         '-',
//         '  ',
//         '',
//         '.',
//         'foo',
//         '20.foo',
//         '2020-01-06T14:31:00.135Z',
//     ],
// })

test({
    validator: 'isFullWidth',
    valid: [
        'ひらがな・カタカナ、．漢字',
        '３ー０　ａ＠ｃｏｍ',
        'Ｆｶﾀｶﾅﾞﾬ',
        'Good＝Parts',
    ],
    invalid: [
        'abc',
        'abc123',
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    ],
})


// test({
//     validator: 'isHash',
//     valid: [
//         'ZG======',
//         'JBSQ====',
//         'JBSWY===',
//         'JBSWY3A=',
//         'JBSWY3DP',
//         'JBSWY3DPEA======',
//         'K5SWYY3PNVSSA5DPEBXG6ZA=',
//         'K5SWYY3PNVSSA5DPEBXG6===',
//     ],
//     invalid: [
//         '12345',
//         '',
//         'JBSWY3DPtesting123',
//         'ZG=====',
//         'Z======',
//         'Zm=8JBSWY3DP',
//         '=m9vYg==',
//         'Zm9vYm/y====',
//     ],
// })

test({
    validator: 'isHalfWidth',
    valid: [
        '"#$%&()<>/+=-_? ~^|.,@`{}[]',
        'l-btn_02--active',
        'abc123い',
        'ｶﾀｶﾅﾞﾬ￩',
    ],
    invalid: [
        'あいうえお',
        '００１１',
    ]
})


// test({
//     validator: 'isHexaDecimal',
//     valid: [
//         'deadBEEF',
//         'ff0044',
//     ],
//     invalid: [
//         'abcdefg',
//         '',
//         '..',
//         '0xa2h',
//         '0xa20x',
//         '0x0123456789abcDEFq',
//         '0hfedCBA9876543210q',
//         '01234q56789abcDEF',
//     ],
// })


test({
    validator: 'isHexColor',
    valid: [
        '#ff0000ff',
        '#ff0034',
        '#CCCCCC',
        '0f38',
        'fff',
        '#f00',
    ],
    invalid: [
        '#ff',
        'fff0a',
        '#ff12FG',
    ],
})


test({
    validator: 'isHSL',
    valid: [
        'hsl(360,0000000000100%,000000100%)',
        'hsl(000010, 00000000001%, 00000040%)',
        'HSL(00000,0000000000100%,000000100%)',
        'hsL(0, 0%, 0%)',
        'hSl(  360  , 100%  , 100%   )',
        'Hsl(  00150  , 000099%  , 01%   )',
        'hsl(01080, 03%, 4%)',
        'hsl(-540, 03%, 4%)',
        'hsla(+540, 03%, 4%)',
        'hsla(+540, 03%, 4%, 500)',
        'hsl(+540deg, 03%, 4%, 500)',
        'hsl(+540gRaD, 03%, 4%, 500)',
        'hsl(+540.01e-98rad, 03%, 4%, 500)',
        'hsl(-540.5turn, 03%, 4%, 500)',
        'hsl(+540, 03%, 4%, 500e-01)',
        'hsl(+540, 03%, 4%, 500e+80)',
        'hsl(4.71239rad, 60%, 70%)',
        'hsl(270deg, 60%, 70%)',
        'hsl(200, +.1%, 62%, 1)',
        'hsl(270 60% 70%)',
        'hsl(200, +.1e-9%, 62e10%, 1)',
        'hsl(.75turn, 60%, 70%)',
        // 'hsl(200grad+.1%62%/1)', //supposed to pass, but need to handle delimiters
        'hsl(200grad +.1% 62% / 1)',
        'hsl(270, 60%, 50%, .15)',
        'hsl(270, 60%, 50%, 15%)',
        'hsl(270 60% 50% / .15)',
        'hsl(270 60% 50% / 15%)',
    ],
    invalid: [
        'hsl (360,0000000000100%,000000100%)',
        'hsl(0260, 100 %, 100%)',
        'hsl(0160, 100%, 100%, 100 %)',
        'hsl(-0160, 100%, 100a)',
        'hsl(-0160, 100%, 100)',
        'hsl(-0160 100%, 100%, )',
        'hsl(270 deg, 60%, 70%)',
        'hsl( deg, 60%, 70%)',
        'hsl(, 60%, 70%)',
        'hsl(3000deg, 70%)',
    ],
})

test({
    validator: 'isInt',
    valid: [
        '13',
        '123',
        '0',
        '-0',
        '+1',
        '01',
        '-01',
        '000',
    ],
    invalid: [
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{ allow_leading_zeroes: false }],
    valid: [
        '13',
        '123',
        '0',
        '123',
        '-0',
        '+1',
    ],
    invalid: [
        '01',
        '-01',
        '000',
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{ allow_leading_zeroes: true }],
    valid: [
        '13',
        '123',
        '0',
        '123',
        '-0',
        '+1',
        '01',
        '-01',
        '000',
        '-000',
        '+000',
    ],
    invalid: [
        '100e10',
        '123.123',
        '   ',
        '',
    ],
});

test({
    validator: 'isInt',
    args: [{
        min: 10,
    }],
    valid: [
        '15',
        '80',
        '99',
    ],
    invalid: [
        '9',
        '6',
        '3.2',
        'a',
    ],
});

test({
    validator: 'isInt',
    args: [{
        min: 10,
        max: 15,
    }],
    valid: [
        '15',
        '11',
        '13',
    ],
    invalid: [
        '9',
        '2',
        '17',
        '3.2',
        '33',
        'a',
    ],
});

test({
    validator: 'isInt',
    args: [{
        gt: 10,
        lt: 15,
    }],
    valid: [
        '14',
        '11',
        '13',
    ],
    invalid: [
        '10',
        '15',
        '17',
        '3.2',
        '33',
        'a',
    ],
});

test({
    validator: 'isLowerCase',
    valid: [
        'abc',
        'abc123',
        'this is lowercase.',
        'tr竪s 端ber',
    ],
    invalid: [
        'fooBar',
        '123A',
    ],
})

test({
    validator: 'isUpperCase',
    valid: [
        'ABC',
        'ABC123',
        'ALL CAPS IS FUN.',
        '   .',
    ],
    invalid: [
        'fooBar',
        '123abc',
    ],
});
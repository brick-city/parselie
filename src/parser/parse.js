import { CstParser } from 'chevrotain';
import { allTokens } from '../lexer/lex.js';

// eslint-disable-next-line import/prefer-default-export
export class ParslieParser extends CstParser {

    constructor() {

        super(allTokens, {
            recoveryEnabled: true, // TODO: Check to see if recoveryEnabled is the right default for this
        });

        this.performSelfAnalysis();

    }

}

import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

export default class Create extends Command {
    static description = 'Create a new task'

    static flags = {
        help: flags.help({char: 'h'}),
        done: flags.boolean({ char: 'd' }),
        product: flags.string({char: 'p'})
    }

    static args = [{
        name: 'task',
        required: true
    }]

    async run() {
        const { args, flags } = this.parse(Create)
        
        if (flags.product) {
            const taskordConfigRead = await fs.readJsonSync(path.join(this.config.configDir, 'config.json'), { throws: false })

            let details = taskordConfigRead.webhooks.find(e => e.product == flags.product)
            this.log(details);
        }

        this.log(`hello lads from /Users/Sam/projects/taskord-cli/src/commands/create.ts`)
    }
}

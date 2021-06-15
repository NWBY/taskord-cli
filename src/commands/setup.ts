import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import * as fs from 'fs-extra'
import * as path from 'path'

export default class Setup extends Command {
    static description = 'Setup your Taskord webhook'

    static flags = {
        help: flags.help({char: 'h'}),
    }

    async run() {
        const { flags } = this.parse(Setup)
        let productName;

        this.log('Directing you to Taskord to create a webhook');
        
        // await cli.open('https://taskord.com/settings/integrations');

        const webhook = await cli.prompt('Webhook URL?');

        const forProduct = await cli.confirm('Is this a product webhook? [y/n]');

        if (forProduct) {
            productName = await cli.prompt('Product name');
        }

        const contents = {
            product: productName,
            url: webhook
        }

        await fs.ensureFileSync(path.join(this.config.configDir, 'config.json'))

        const taskordConfigRead = await fs.readJsonSync(path.join(this.config.configDir, 'config.json'), { throws: false })

        let webhooks = taskordConfigRead ? taskordConfigRead.webhooks : []

        webhooks.push(contents);

        const taskordConfig = await fs.outputJsonSync(path.join(this.config.configDir, 'config.json'), {
            webhooks: webhooks
        })
    }
}

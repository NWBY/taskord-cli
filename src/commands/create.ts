import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import axios from 'axios'

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

        const taskordConfigRead = await fs.readJsonSync(path.join(this.config.configDir, 'config.json'), { throws: false })

        this.log(`${flags.done}`)
        
        if (flags.product) {
            let details = taskordConfigRead.webhooks.find(e => {
                return e.product.toLowerCase() == flags.product.toLowerCase();
            });

            this.createTask(details, args.task, flags.done);
        } else {
            let details = taskordConfigRead.webhooks.find(e => e.product == 'none');

            this.createTask(details, args.task, flags.done);
        }
    }

    createTask(config: any, task: String, done: any) {
        const response = axios.post(config.url, {
            task: task,
            done: done ? done : false
        }).then(res => {
            this.log('Task successfully created!')
        })
            .catch(err => {
                this.log('Oh! That task wasn\'t created, you may have experienced an error!')
            })
    }
}

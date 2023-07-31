/*
 * @adonisjs/redis
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './src/types/extended.js'

export { defineConfig } from './src/define_config.js'
export { stubsRoot } from './stubs/index.js'
export { configure } from './configure.js'
export * as errors from './src/errors.js'
export { default as RedisManager } from './src/redis_manager.js'

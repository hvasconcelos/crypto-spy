import { readTextFile, createDir, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

export class SettingsFile<T> {

  _filename: string;

  constructor(filename: string) {
    this._filename = filename;
  }

  async load(defaultValue: T): Promise<T> {
    let value = defaultValue;
    try {
      value = JSON.parse(await readTextFile(this._filename, { dir: BaseDirectory.App }));
    } catch (err) {
      await createDir('', { dir: BaseDirectory.App, recursive: true });
      await writeTextFile(
        this._filename,
        JSON.stringify(defaultValue),
        { dir: BaseDirectory.App }
      );
    }
    return value;
  }

  async save(content: T) {
    await writeTextFile({
      path: this._filename,
      contents: JSON.stringify(content)
    }, { dir: BaseDirectory.App }
    );
  }
}

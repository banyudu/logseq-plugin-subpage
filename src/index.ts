import '@logseq/libs'

/**
 * entry
 */
function main () {
  logseq.UI.showMsg('Welcome! Type /Sub Page to continue')
  logseq.Editor.registerSlashCommand('Sub Page', async () => {
    const page = await logseq.Editor.getCurrentPage()
    if (page) {
      const name = page.originalName
      await logseq.Editor.insertAtEditingCursor(`[[${name}/]]`)
    }
  })
}

// bootstrap
logseq.ready(main).catch(console.error)

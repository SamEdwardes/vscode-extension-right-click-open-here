default:
    @just --list

package:
    vsce package --pre-release

publish-vscode:
    vsce publish --pre-release

publish-vsx:
    npx ovsx publish -p $OPENVSX_MARKETPLACE_TOKEN --pre-release

publish:
    just package
    just publish-vscode
    just publish-vsx
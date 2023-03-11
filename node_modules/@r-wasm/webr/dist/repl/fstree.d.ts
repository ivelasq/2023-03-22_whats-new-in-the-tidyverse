/// <reference types="jquery" />
/// <reference types="jquery" />
/// <reference types="jstree" />
import { FSNode } from '../webR/webr-main';
import 'jstree/dist/themes/default/style.css';
interface JQueryJSTreeElement extends Omit<JQuery, 'on'> {
    jstree(options?: {}): JSTree;
    on(eventName: string, callback: (event: Event, data: {
        node: JSTreeNode;
        action: any;
        selected: string[];
        event: Event;
    }) => void): this;
}
export type JSTreeNode = {
    text: string;
    icon?: string;
    state?: {
        opened?: boolean;
        disabled?: boolean;
        selected?: boolean;
    };
    parents?: JSTreeNode[];
    children?: JSTreeNode[];
    original?: {
        [key: string]: any;
    };
    isFolder?: boolean;
};
type FSTreeOptions = {
    selector: string;
    core?: {
        check_callback: boolean;
        data: (obj: {
            id: string;
        }, cb: {
            call: (FSTree: FSTreeInterface, jsTreeNode: JSTreeNode) => any;
        }) => void;
        multiple: boolean;
    };
};
export interface FSTreeInterface {
    getSelectedNodes: typeof getSelectedNodes;
    getSelectedNode: typeof getSelectedNode;
    refresh: typeof refresh;
    createJSTreeNodefromFSNode: typeof createJSTreeNodefromFSNode;
    getJSTreeElement: typeof getJSTreeElement;
    getNodeFileName: typeof getNodeFileName;
}
export declare function initFSTree(options: FSTreeOptions): FSTreeInterface;
export declare function getJSTreeElement(): JQueryJSTreeElement;
export declare function getSelectedNodes(): JSTreeNode[];
export declare function getSelectedNode(): JSTreeNode | undefined;
export declare function getNodeFileName(node: JSTreeNode): string;
export declare function refresh(): void;
export declare function createJSTreeNodefromFSNode(fsNode: FSNode): JSTreeNode;
export {};

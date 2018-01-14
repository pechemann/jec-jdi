/*!
 * JEC JDI Node Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-jdi" {

import { Member, Parameter } from "jec-commons";

export interface InjectableParams {    type?: Symbol;    retention?: Array<string>;    qualifier?: string;    scope?: string;}export interface InjectParams {    type?: Symbol;    retention?: Array<string>;    qualifier?: string;}export function Inject(params?: InjectParams): Function;export function Injectable(params?: InjectableParams): Function;export abstract class AbstractScope implements Scope {    constructor(type: string);    private _type;    getType(): string;}export class ApplicationScoped extends AbstractScope implements Scope {    constructor();}export class RequestScoped extends AbstractScope implements Scope {    constructor();}export interface Scope {    getType(): string;}export enum ScopeType {    DEPENDENT = "dependent",    APPLICATION = "application",    SESSION = "session",    REQUEST = "request",}export class SessionScoped extends AbstractScope implements Scope {    constructor();}export class InvalidInjectionPointError extends JdiError {    constructor(target: any);}export class JdiError extends Error {    constructor(message: string);}export interface Bean {    getScope(): Scope;    getName(): string;}export interface BeanManager {    addBean(bean: Bean): void;    getBeans(injectionPoint: InjectionPoint): Set<Bean>;}export interface InjectionPoint {    getBean(): Bean;    getType(): any;    getElement(): Member | Parameter;}export interface JDI {    getContainer(): JdiContainer;    getBeanManager(): BeanManager;}export interface JdiContainer {    getId(): string;    getBeanManager(key: string): BeanManager;    setBeanManager(beanManager: BeanManager, key: string): void;}export interface JdiContext {    getScope(): Scope;    isActive(): boolean;}export enum JdiConnectorRefs {    INJECT_PARAMETER_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#parameter",    INJECT_PROPERTY_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Inject#property",    INJECTABLE_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Injectable",}}
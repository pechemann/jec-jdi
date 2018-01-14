//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {InjectionPoint} from "./InjectionPoint";
import {Bean} from "./Bean";

/**
 * Allows a portable extension to interact directly with the JEC container.
 * Provides operations for obtaining contextual references for beans.
 */
export interface BeanManager {
  
  /**
   * Adds the specified bean to this <code>BeanManager</code> object.
   * 
   * @param {Bean} bean the bean to add to this <code>BeanManager</code> object.
   */
  addBean(bean:Bean):void;

  /**
   * Returns a set of beans that resolve the specified injection point.
   * 
   * @param {InjectionPoint} injectionPoint the injection point for which to
   *                                        retrieve beans.
   * @return {Set<Bean>} the collection of beans that resolve the specified
   *                     injection point.
   */
  getBeans(injectionPoint:InjectionPoint):Set<Bean>;
};
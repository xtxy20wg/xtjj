import { defineStore } from 'pinia'
// defineStore返回的是一个函数，通常用useName命名该函数,调用该函数返回store
const useListOne = defineStore('ListOne', {
    state: () => ({
        name: [
              {id:0,data:'Justin3go'},  
              {id:1,data: '支付宝体验科技'},
              {id:2, data: '探险家火炎'}
            ],
        time: ['12天前', '18天前', '6小时前'],
        content:['🕹 7万奖金,字节Offer,iPhone 14 Pro 等惊喜奖品,四大赛题,1024邀你码上掘金!','228欢乐马事件,希望大家都能平安健',' 面试官：“项目这么问，就能把你水分挤干！”'],
        smcontent:["整理了一篇关于ChatGPT 注册、调教、应用实践、模型算法、行业解读，最全内容指南，你想了解的都在这里","前言 本次介绍一下 informer 实际使用中遇到的问题与一些技巧进行补充, 如需了解 Informer 比较详细的使用方法请查阅 [K8S] client-go 的正确打开方式. 资源对象会丢失的","💥前端组件库DevUI视觉版本大更新，*DevUI官网全面升级 *Ng-DevUI 15.1.0 又又又更新啦 DevUI *Admin 配套cli以及物料库均已升级到ng15 ~"],
        imga:['two.webp','three.webp','four.webp']
    
    }),
    getters: {

    },
    actions: {


    }
})
export default useListOne
